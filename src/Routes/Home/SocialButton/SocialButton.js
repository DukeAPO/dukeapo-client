// React and Button
import React, { Component } from 'react';
import Ripples from 'react-ripples';

// Style
import './SocialButton.css';

class SocialButton extends Component {
  render() {
    return (
      <a href={this.props.href}>
        <Ripples className={`routes-home-socialbutton-ripples routes-home-socialbutton-round`}>
          <img src={this.props.src}
            className={`global-image-size routes-home-socialbutton-image`} alt={"Social Button"}/>
        </Ripples>
      </a>
    );
  }
};

export default SocialButton;
