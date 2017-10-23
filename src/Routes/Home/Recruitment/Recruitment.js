import React, { Component } from 'react';
import SizeComponent from '../../../Components/SizeComponent';
import { PickImageByProportion } from '../../../Util/PickImage.js';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import JoinListServeButton from '../JoinListServeButton';
import SocialButton from '../SocialButton';


import './Recruitment.css';

class Description extends Component {
  render() {
    const widthCutoff = 470;
    const facebookButton = (
      <td>
        <h4 className={`routes-home-recruitment-facebook-button-container`}>
          Follow us on &nbsp;
          <SocialButton src={PickImageByProportion('Facebook.png', 0.2, 0.1)}
            href={'https://www.facebook.com/DukeAlphaPhiOmega/'} />
        </h4>
      </td>
    );
    const listServeButton = (
      <td>
          <JoinListServeButton />
      </td>
    );
    var buttonOrder = undefined;
    if(this.props.width > widthCutoff) {
      buttonOrder = (
        <table className={`routes-home-recruitment-table`}>
          <tr>
            {facebookButton}
            {listServeButton}
          </tr>
        </table>
      );
    }
    else{
      buttonOrder = (
        <table className={`routes-home-recruitment-table`}>
          <tr className={`routes-home-recruitment-space`}>
            {facebookButton}
          </tr>
          <tr className={`routes-home-recruitment-space`}>
            {listServeButton}
          </tr>
        </table>
      );
    }

    return (
      <div className={`routes-home-recruitment-info-container`}>
        <h2 className={`routes-home-recruitment-subheader`}>
          {this.props.subheader}
        </h2>
        <p className={`routes-home-recruitment-description`}>
          {this.props.description}
        </p>
        {buttonOrder}
      </div>
    );
  }
}

class DescriptionImage extends Component {
  render() {
    return (
      <div className={`routes-home-recruitment-info-container`}>
        <div className={`global-image-shadow`}>
          <img src={this.props.src} className={`global-image-size routes-home-recruitment-image`}/>
        </div>
      </div>
    );
  }
}

class RecruitmentContainer extends SizeComponent {
  render() {
    const widthCutoff = 930;
    var order = undefined;
    const description = <Description subheader={this.props.subheader}
      description = {this.props.description} width={this.state.width}/>;
    const image = <DescriptionImage src={this.props.src}/>;
    if(this.state.width < widthCutoff){
      order = (
        <div>
          <TableRow style={{borderBottom: 'none', borderTop: 'none'}}>
            {description}
          </TableRow>
          <TableRow style={{borderBottom: 'none', borderTop: 'none', borderTop: '0'}}>
            {image}
          </TableRow>
        </div>
      );
    }
    else {
      order = (
        <TableRow>
          <TableRowColumn>
            {description}
          </TableRowColumn>
          <TableRowColumn>
            {image}
          </TableRowColumn>
        </TableRow>
      );
    }
    return (
      <Table style={{backgroundColor: '#D8D8D8'}} selectable={false}>
        <TableBody displayRowCheckbox={false}>
          {order}
        </TableBody>
      </Table>
    );
  }
}

class Recruitment extends Component {
  render(){
    const data = {
      subheader: 'Joining APO',
      description: `APO is a great way to meet new people who share your
        passion for helping our campus and community. We’re proud to be a
        co-ed, non-exclusive organization that doesn’t haze and is welcoming to
        all. Come to one of our events to find out more about Duke’s APO
        family!`,
    };


    return (
      <div className={`routes-home-recruitment-container`}>
        <div className={`routes-home-recruitment-header`}>
          <h1>
            Recruitment
          </h1>
        </div>
        <RecruitmentContainer subheader={data.subheader}
          description={data.description} src={PickImageByProportion('Broomball.jpg', 1.0, 0.8)}/>
      </div>
    );
  }

}

export default Recruitment;
