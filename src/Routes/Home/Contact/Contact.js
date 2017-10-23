import React from 'react';
import SizeComponent from '../../../Components/SizeComponent';
import { PickImageByProportion } from '../../../Util/PickImage.js';

import './Contact.css';

const widthCutoff = 760;

class ContactSection extends SizeComponent {
  render() {
    var order = undefined;
    const image = (
      <div className={`global-image-shadow`}>
        <img className={`routes-home-contact-image`}
          src={PickImageByProportion('ApoNCDiaperBank.png', 0.8, 0.6)} />
      </div>
    );
    const description = (
      <div className={`routes-home-contact-description-container`}>
        <p>
          We&#39;re all about working with our North Carolina community.
          To share your event, cause, or organization, please fill out
          this Google Form <a href="https://docs.google.com/forms/d/1wKdIaGrDnlfOUKjxTI6Fq8XT_y2Q6oTwmKx9Z9yaUXk/viewform?edit_requested=true" target="_blank">
          here</a>.
        </p>
      </div>
    );
    if(this.state.width < widthCutoff){
      order = (
        <table className={`routes-home-contact-table`}>
          <tr className={`routes-home-contact-table-space`}>
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
        <table className={`routes-home-contact-table`}>
          <tr>
            <td className={`routes-home-contact-td`}>
              {image}
            </td>
            <td className={`routes-home-contact-td`}>
              {description}
            </td>
          </tr>
        </table>
      );
    }
    return (
      <div className={`routes-home-contact-container`}>
        <div className={`routes-home-contact-header-container `}>
          <h1 className={`routes-home-contact-header`}>Contact</h1>
        </div>
        <div>
          {order}
        </div>
      </div>
    );
  }
}

export default ContactSection;
