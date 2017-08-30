import React from 'react';
import ResizeableComponent from '../ResizeableComponent';
import font from '../CSS/Font.css';
import shadow from '../CSS/ImageShadow.css';
import classes from './ContactSection.css';
import diaperbank from '../Assets/ApoNCDiaperBank.png';

const widthCutoff = 760;

class ContactSection extends ResizeableComponent {
  render() {
    var order = undefined;
    const image = (
      <div className={`${shadow.shadow}`}>
        <img className={classes.image} src={diaperbank} />
      </div>
    );
    const description = (
      <div className={classes.descriptionContainer}>
        <p className={`${font.p}`}>
          We&#39;re all about working with our North Carolina community.
          To share your event, cause, or organization, please fill out
          this Google Form <a href="https://docs.google.com/forms/d/1wKdIaGrDnlfOUKjxTI6Fq8XT_y2Q6oTwmKx9Z9yaUXk/viewform?edit_requested=true" target="_blank">
          here</a>.
        </p>
      </div>
    );
    if(this.state.width < widthCutoff){
      order = (
        <table className={classes.table}>
          <tr className={classes.space}>
            <td>
              {image}
            </td>
          </tr>
          <tr>
            <td>
              {description}
            </td>
          </tr>
        </table>
      );
    }
    else{
      order = (
        <table className={classes.table}>
          <tr>
            <td className={classes.td}>
              {image}
            </td>
            <td className={classes.td}>
              {description}
            </td>
          </tr>
        </table>
      );
    }
    return (
      <div className={classes.container}>
        <div className={classes.contactHeaderContainer}>
          <h1 className={`${font.h1} ${classes.contactHeader}`}>Contact</h1>
        </div>
        <div>
          {order}
        </div>
      </div>
    );
  }
}

export default ContactSection;
