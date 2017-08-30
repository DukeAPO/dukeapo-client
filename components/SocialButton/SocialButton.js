import React from 'react';
import button from '../CSS/Button.css';
import s from './SocialButton.css';
import FlatButton from 'material-ui/FlatButton';
import facebookImage from '../Assets/Facebook.png';
import Ripples from 'react-ripples';

class SocialButton extends React.Component {
  render() {
    return (
      <a href={this.props.href}>
        <Ripples className={button.ripples}>
          <img src={this.props.src} className={s.image}/>
        </Ripples>
      </a>
    );
  }
}

export default SocialButton;
