import React from 'react';
import classes from './ContactSection.css';

export const ContactSection = () => (
  <div>
    <div className={classes.container}>
      <h1 className={classes.contactHeader}>Contact</h1>
      <p className={classes.contactText}>
        We\'re all about working w\ith <br /> our North Carolina community. 
        <br /> To share your event, cause, or <br /> organization, please 
        fill out t\his <br /> Google Form 
        <a href="https://docs.google.com/forms/d/1wKdIaGrDnlfOUKjxTI6Fq8XT_y2Q6oTwmKx9Z9yaUXk/viewform?edit_requested=true" 
        target="_blank">
            here.
        </a>
      </p>
    </div>
  </div>
);
export default ContactSection;
