import React from 'react';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import font from '../CSS/Font.css';
import shadow from '../CSS/ImageShadow.css';
import button from '../CSS/Button.css';
import s from './Recruitment.css';
import broomball from '../Assets/Broomball.jpg';
import facebookImage from '../Assets/Facebook.png';
import SocialButton from '../SocialButton';
import JoinListServeButton from '../JoinListServeButton';

class RecruitmentImage extends React.Component {
  render() {
    return (
      <div className={`${s.container}`}>
        <div className={`${shadow.shadow}`}>
          <img src={this.props.src} className={`${s.image}`}/>
        </div>
      </div>
    );
  }
}

class RecruitmentDescription extends React.Component {

  render() {
    const widthCutoff = 470;
    const facebookButton = (
      <td>
        <h4 className={`${font.h4} ${s.facebookButtonContainer}`}>
          Follow us on &nbsp;
          <SocialButton src={facebookImage} href={'https://www.facebook.com/DukeAlphaPhiOmega/'} />
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
        <table className={`${s.table}`}>
          <tr>
            {facebookButton}
            {listServeButton}
          </tr>
        </table>
      );
    }
    else{
      buttonOrder = (
        <table className={`${s.table}`}>
          <tr className={s.space}>
            {facebookButton}
          </tr>
          <tr className={s.space}>
            {listServeButton}
          </tr>
        </table>
      );
    }

    return (
      <div className={s.container}>
        <h2 className={`${font.h2} ${s.subheader}`}>
          {this.props.subheader}
        </h2>
        <p className={`${font.p} ${s.description}`}>
          {this.props.description}
        </p>
        {buttonOrder}
      </div>
    );
  }
}

class RecruitmentContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      width: 0,
      height: 0
    };
    this.resizeState = this.resizeState.bind(this);
  }

  resizeState() {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  componentWillMount() {
    this.resizeState();
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeState);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeState);
  }

  render() {
    const widthCutoff = 1000;
    var order = undefined;
    const description = <RecruitmentDescription subheader={this.props.subheader}
      description = {this.props.description} width={this.state.width}/>;
    const image = <RecruitmentImage src={this.props.src}/>;
    if(this.state.width < widthCutoff){
      order = (
        <div>
          <TableRow style={{borderBottom: 'none', borderTop: 'none'}}>
            {description}
          </TableRow>
          <TableRow style={{borderBottom: 'none', borderTop: 'none'}}>
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
      <Table style={{backgroundColor: '#d3d3d3'}} selectable={false}>
        <TableBody displayRowCheckbox={false}>
          {order}
        </TableBody>
      </Table>
    );
  }
}

class Recruitment extends React.Component {

  render(){
    const data = {
      subheader: 'Joining APO',
      description: 'APO is a great way to meet new people who \
        share your passion for helping our campus and \
        community. We’re proud to be a co-ed, non-exclusive \
        organization that doesn’t haze and is welcoming \
        to all. Come to one of our events to find out \
        more about Duke’s APO family!',
    };


    return (
      <div>
        <h1 className={`${font.h1} ${s.header}`}>
          Recruitment
        </h1>
        <RecruitmentContainer subheader={data.subheader}
          description={data.description} src={broomball}/>
      </div>
    );
  }

}

export default Recruitment;
