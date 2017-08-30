import React from 'react';
import classes from './ContactSection.css';
import diaperbank from '../Assets/apoNCDiaperBank.png';

class ContactSection extends React.Component {
  render() {
    return (
      <div>
        <div className={classes.container}>
          <div className={classes.smallContainer}>
            <h1 className={classes.contactHeader}>Contact</h1>
            <table border={"1"} style={{width:'100%'}}>
              <tr>
                <th><img className={classes.image} src={diaperbank} /></th>
                <th>
                <p className={classes.contactText}>
                  We&#39;re all about working with <br /> our North Carolina community. <br /> To share your event, cause, or <br /> organization, please fill out this <br />
                  Google Form  <a href="https://docs.google.com/forms/d/1wKdIaGrDnlfOUKjxTI6Fq8XT_y2Q6oTwmKx9Z9yaUXk/viewform?edit_requested=true"
                  target="_blank">here.</a>
                  </p>
                </th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactSection;
