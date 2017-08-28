import React from 'react';
import Paper from 'material-ui/Paper';
import s from './Image.css';
import shadow from '../CSS/ImageShadow.css';

class Image extends React.Component {

  render() {
    return(
      <div className={shadow.shadow}>
        <img src={this.props.src} className={s.image} />
      </div>
    );
  }
}

export default Image;
