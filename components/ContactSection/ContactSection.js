import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import classes from './ContactSection.css';
import diaperbank from '../Assets/apoNCDiaperBank.png';

export const ContactSection = () => (
  <div>
    <div className={classes.container}>
      <div className={classes.smallContainer}>
        <h1 className={classes.contactHeader}>Contact</h1>
        <Table>
          <TableBody displayRowCheckbox={false}>
            <TableRow displayBorder={false} selectable={false}> 
              <TableRowColumn className={classes.pictureColumn}><img className={classes.image} src={diaperbank} /></TableRowColumn>
              <TableRowColumn className={classes.textColumn}>
              <p className={classes.contactText}>
              We're all about working with <br /> our North Carolina community. 
              <br /> To share your event, cause, or <br /> organization, please 
              fill out this <br /> Google Form  <a href="https://docs.google.com/forms/d/1wKdIaGrDnlfOUKjxTI6Fq8XT_y2Q6oTwmKx9Z9yaUXk/viewform?edit_requested=true" 
              target="_blank">here.</a> 
              </p>
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  </div>
);
export default ContactSection;
