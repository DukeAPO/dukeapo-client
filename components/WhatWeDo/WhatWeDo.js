import React from 'react';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import s from './WhatWeDo.css';
import shadow from '../Image/Image.css';
import semi from '../Assets/SemiFall16.jpg';
import couch from '../Assets/Couch.jpg';
import stream from '../Assets/Stream.jpg';

class WhatWeDoDescription extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <h3 className={`${s.title}`}
          style={{backgroundColor: this.props.color}}>
          {this.props.title}
        </h3>
        <p className={`${s.description} ${s.descriptioncontainer}`} style={{flexGrow: '1'}}>
          {this.props.information}
        </p>
      </div>
    );
  }
}

class WhatWeDoImage extends React.Component {
  render() {
    return (
      <div className={`${s.container} ${shadow.shadow}`}>
        <img src={this.props.src} className={s.image}/>
      </div>
    );
  }
}

class WhatWeDoBlock extends React.Component {

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
    const widthCutoff = 930;
    const heightCutoff = 1024;
    var order = undefined;
    const description = <WhatWeDoDescription title={this.props.title}
      information={this.props.information} color={this.props.color}/>;
    const image = <WhatWeDoImage src={this.props.src}/>;
    if (this.state.width < widthCutoff){
      order = (
        <div>
          <TableRow style={{borderBottom: 'none'}}>
            {description}
          </TableRow>
          <TableRow style={{borderTop: 'none'}}>
            {image}
          </TableRow>
        </div>
      );
    }
    else{
      const descriptionSmall = (
        <TableRowColumn style={{width: '45%'}}>
          {description}
        </TableRowColumn>
      );
      const imageBig = (
        <TableRowColumn style={{width: '55%'}}>
          {image}
        </TableRowColumn>
      );
      if(this.props.orientation === 'lr'){
        order = (
          <TableRow>
            {descriptionSmall}
            {imageBig}
          </TableRow>
        );
      }else if(this.props.orientation === 'rl'){
        order = (
          <TableRow>
            {imageBig}
            {descriptionSmall}
          </TableRow>
        );
      }
    }

    return (
      <Table style={{backgroundColor: '#ffffff'}} selectable={false}>
        <TableBody displayRowCheckbox={false}>
          {order}
        </TableBody>
      </Table>
    );
  }

}

class WhatWeDo extends React.Component {

  render(){
    const data = [
      {
        title: 'Leadership',
        information: 'Our chapter offers opportunities for \
          its members to strengthen their leadership \
          skills through semester-long officer positions. \
          Elections are held each semester, and these provide \
          chances for brothers to learn and grow as leaders \
          in the community.',

        src: semi,
        orientation: 'lr',
        color: '#065bbe'
      },
      {
        title: 'Friendship',
        information: 'Besides serving together, we also have fun \
          together! We hold socials, weekly dinners, and \
          our traditional APO goes to Bella Union events \
          on Thursdays as events in which brothers and \
          pledges can bond. We also hold semi-formals, \
          sectional and regional conferences, and retreats \
          where the APO family comes together, both at Duke \
          and at other colleges.',
        src: couch,
        orientation: 'rl',
        color: '#FFC107'
      },
      {
        title: 'Service',
        information: 'Participation in service is what APO is \
        all about. Throughout the week, projects include \
        tutoring high school students, doing science experiments \
        with children, playing with kids at the Boys and Girls \
        Club, tending crops at the Duke Campus Farm, building homes \
        with Habitat for Humanity, assisting the elderly at a local \
        nursing home, and even taking care of tigers at Carolina \
        Tiger Rescue!',

        src: stream,
        orientation: 'lr',
        color: '#065bbe'
      }
    ];

    const blocks = [];
    data.forEach(function(block){
      blocks.push(
        <div style={{margin:'30px'}}>
          <WhatWeDoBlock title={block.title} src={block.src}
            information={block.information} color={block.color}
            orientation={block.orientation}/>
        </div>
      );
    });

    return (
      <div>
        <h1 className={s.header}>
          Why APO?
        </h1>
        <div style={{padding:'0px 10px 20px 10px'}}>
          {blocks}
        </div>
      </div>
    );
  }

}

export default WhatWeDo;
