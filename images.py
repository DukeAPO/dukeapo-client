#!/usr/bin/python

import argparse
import os

from google.cloud import storage
from PIL import Image

IMAGES_DIR = './images'
TEMPORARY_DIR = './temporary'
SRC_DIR = './src'
IGNORE = ['.DS_Store']
EXTENSIONS = ['jpg', 'png']

WIDTH = 'width'
HEIGHT = 'height'
EXT = 'ext'
SIZES = 'sizes'
URL = 'url'
BUCKET_NAME = 'dukeapo-static-images'

JS_FILE_PATH = './src/ImagesMeta.js'

class BucketClient(object):

    _CACHE_CONTROL = 'max-age=2592000'

    def __init__(self, bucket_name):
        self._bucket = storage.Client().get_bucket(bucket_name)
        return

    def upload_to_bucket(self, source_filename, bucket_filename):
        blob = self._bucket.blob(bucket_filename)
        blob.upload_from_filename(source_filename)
        blob.make_public()
        blob.cache_control = self._CACHE_CONTROL
        blob.patch()
        return

    def get_bucket_filenames(self):
        return sorted([str(blob.name) for blob in self._bucket.list_blobs()])

    def get_bucket_blobs(self):
        return [blob for blob in self._bucket.list_blobs()]

    def set_all_public(self):
        for blob in self._bucket.list_blobs():
            blob.make_public()
        return

    def set_all_cache_control(self):
        for blob in self._bucket.list_blobs():
            blob.cache_control = self._CACHE_CONTROL
            blob.patch()
        return


def except_images_dir_exists():
    if not os.path.exists(IMAGES_DIR):
        raise Exception('IMAGES_DIR {0} DOES NOT EXIST'.format(IMAGES_DIR))
    return True

def except_src_dir_exists():
    if not os.path.exists(SRC_DIR):
        raise Exception('SRC_DIR {0} DOES NOT EXIST'.format(SRC_DIR))
    return True

def except_temporary_dir_exists():
    if not os.path.exists(TEMPORARY_DIR):
        raise Exception('TEMPORARY_DIR {0} DOES NOT EXIST'
            .format(TEMPORARY_DIR))
    return True

def check_item_ignore(item):
    if item in IGNORE:
        print('IGNORING {0}'.format(item))
        return False
    return True


def check_item_extension(item, file_ext):
    if file_ext not in EXTENSIONS:
        print('INVALID EXTENSION {0}'.format(item))
        return False
    return True


def check_item_name(item):
    if '_' in item:
        print('_ IN FILENAME {0}'.format(item))
        return False
    return True

def check_item_dimension(item, max_dim_val):
    if max_dim_val <= 100:
        print('MAX DIMENSION VALUE<= 100 {0}'.format(item))
        return False
    return True

def resize_and_upload():
    client = BucketClient(BUCKET_NAME)
    bucket_filenames = client.get_bucket_filenames()

    template = '{0}_{1}w_{2}h.{3}'
    for item in os.listdir(IMAGES_DIR):
        if not check_item_ignore(item):
            continue

        file_split = item.split('.')
        file_head, file_ext = file_split[0], file_split[1]

        if not check_item_extension(item, file_ext):
            continue

        if not check_item_name(item):
            continue

        img = Image.open('{0}/{1}'.format(IMAGES_DIR, item))
        width, height = int(img.width), int(img.height)
        max_dim_val = max(width, height)
        if not check_item_dimension(item, max_dim_val):
            continue
        max_dim = WIDTH if max_dim_val == width else HEIGHT

        print('PROCESSING {0}'.format(item))
        start = (max_dim_val/100) * 100 # int division here is important
        if start == max_dim_val:
            start -= 100
        end = 99

        original_file = template.format(file_head, width, height, file_ext)
        if original_file in bucket_filenames:
            print('\tALREADY IN BUCKET {0} AS {1}'.format(item, original_file))
        else:
            client.upload_to_bucket('{0}/{1}'.format(IMAGES_DIR, item),\
                original_file)
            print('\tUPLOADED {0} AS {1}'.format(item, original_file))

        for dim in range(start, end, -100):
            if max_dim == WIDTH:
                new_width = dim
                new_height = float(height)*new_width/width
            elif max_dim == HEIGHT:
                new_height = dim
                new_width = float(width)*new_height/height
            new_width, new_height = int(new_width), int(new_height)
            new_image_name = template.format(file_head, new_width, \
                new_height, file_ext)
            if new_image_name in bucket_filenames:
                print('\tALREADY IN BUCKET {0}'.format(new_image_name))
                continue
            new_image_path = '{0}/{1}'.format(TEMPORARY_DIR, new_image_name)
            img.resize((new_width, new_height), Image.ANTIALIAS) \
                .save(new_image_path)
            print('\tSAVED {0}'.format(new_image_path))
            client.upload_to_bucket(new_image_path, new_image_name)
            print('\tUPLOADED {0}'.format(new_image_path))
            os.unlink(new_image_path)
    return


def make_js_file():
    client = BucketClient(BUCKET_NAME)
    bucket_blobs = client.get_bucket_blobs()

    meta = dict()
    for blob in bucket_blobs:
        name = str(blob.name)
        item_split = name.split('_')
        file_head = item_split[0]
        width = int(item_split[1][:-1])
        ext_split = item_split[2].split('.')
        height = int(ext_split[0][:-1])
        ext = ext_split[1]
        if not file_head in meta:
            meta[file_head] = {
                EXT: ext,
                SIZES: []
            }
        meta[file_head][SIZES].append(
            {
                WIDTH: width,
                HEIGHT: height,
                URL: blob.public_url
            })
    js_meta = []
    for key, value in meta.items():
        sizes = [
            "\t\t\t{{\n" \
            "\t\t\t\twidth: {0},\n" \
            "\t\t\t\theight: {1},\n" \
            "\t\t\t\turl: '{2}'\n" \
            "\t\t\t}}".format(size[WIDTH], size[HEIGHT], size[URL])
            for size in sorted(value[SIZES],
            key=lambda val: (val[WIDTH], val[HEIGHT], val[URL]))
        ]
        js_meta.append(
        "\t{0}: {{\n" \
        "\t\text: '{1}',\n" \
        "\t\tsizes: [\n"\
        "{2}\n" \
        "\t\t]\n" \
        "\t}}".format(key, value[EXT], ',\n'.join(sizes))
        )
    if os.path.exists(JS_FILE_PATH):
        os.unlink(JS_FILE_PATH)
    js_file = open(JS_FILE_PATH, 'w')
    js_file.write(
    "// WARNING: THIS IS AN AUTOGENERATED FILE. DO NOT DIRECTLY EDIT." \
    "\n" \
    "const ImagesMeta = {{\n{0}\n}};" \
    "\n" \
    "export default ImagesMeta;".format(',\n'.join(js_meta)))
    js_file.close()
    return

if __name__ == '__main__':
    except_images_dir_exists()
    except_src_dir_exists()
    except_temporary_dir_exists()
    parser = argparse.ArgumentParser(description='Image uploader.')
    parser.add_argument('--resize_and_upload', type=bool, \
        help='Resize and upload.', default=True)
    parser.add_argument('--set_all_public', type=bool, \
        help='Make bucket files public.', default=False)
    parser.add_argument('--set_all_cache', type=bool, \
        help='Set cache control.', default=False)
    parser.add_argument('--make_js_file', type=bool, \
        help='Make js file with images metadata.', default=True)

    args = parser.parse_args()
    print('STARTING')
    if args.resize_and_upload:
        print('RESIZE AND UPLOAD')
        resize_and_upload()
    if args.set_all_public:
        print('SET ALL PUBLIC')
        BucketClient().set_all_public()
    if args.set_all_cache:
        print('SET ALL CACHE')
        BucketClient().set_all_cache_control()
    if args.make_js_file:
        print('MAKE JS FILE')
        make_js_file()
    print('DONE')
