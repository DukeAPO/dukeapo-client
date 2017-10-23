import ImagesMeta from '../ImagesMeta.js';

function PickImageByPx(imageName, width, height) {
  var fileSplit = imageName.split('.');
  var fileHead = fileSplit[0];
  // var fileExt = fileSplit[1];
  var ret = undefined;
  for(var i = 0; i < ImagesMeta[fileHead].sizes.length; i++){
      var size = ImagesMeta[fileHead].sizes[i];
      if((size.width >= width) && (size.height >= height)){
        ret = size.url;
        break;
      }
  }
  if(!ret){
    ret = ImagesMeta[fileHead].sizes[ImagesMeta[fileHead].sizes.length-1].url;
  }
  return ret;
};

function PickImageByProportion(imageName, widthProportion, heightProportion){

    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;

    if(process.env.NODE_ENV === 'development'){
      screenWidth = window.innerWidth;
      screenHeight = window.innerHeight;
    }

    var dim = Math.max(screenWidth, screenHeight);
    return PickImageByPx(imageName, widthProportion*dim, heightProportion*dim);
};

export { PickImageByPx, PickImageByProportion };
