import React from 'react';
import banner from '../Assets/DukeApoBanner.png'
import Paper from 'material-ui/Paper';
import s from './Banner.css'

class Banner extends React.Component {

  render() {
    return(
      <div className={s.shadow}>
        <img src={banner} className={s.banner} />
      </div>
    );
  }
}

export default Banner;
