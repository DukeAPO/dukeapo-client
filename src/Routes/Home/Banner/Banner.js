// React and Utils
import React from 'react';
import ResizeComponent from '../../../Components/SizeComponent';
import { PickImageByProportion } from '../../../Util/PickImage.js';

class Banner extends ResizeComponent {
  render(){
    const banner = PickImageByProportion('DukeApoBanner.png', 1.0, 0.5);
    return (
      <div className={`global-image-shadow`}>
        <img src={banner} className={`global-image-size`} alt={'APO Banner'}/>
      </div>
    );
  }
};

export default Banner;
