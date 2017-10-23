import React, { Component } from 'react';
import SizeComponent from '../../../Components/SizeComponent';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import { PickImageByProportion } from '../../../Util/PickImage.js';

import './WhyApo.css';

class Description extends Component {
  render() {
    return (
      <div className={`routes-home-whyapo-inner-container`}>
        <h3 className={`routes-home-whyapo-description-title`}
          style={{backgroundColor: this.props.color}}>
          {this.props.title}
        </h3>
        <p className={`routes-home-whyapo-description-text`} style={{flexGrow: '1'}}>
          {this.props.information}
        </p>
      </div>
    );
  }
}

class DescriptionImage extends Component {
  render() {
    return (
      <div className={`routes-home-whyapo-inner-container`}>
        <div className={`global-image-shadow`}>
          <img src={this.props.src} className={`global-image-size`}/>
        </div>
      </div>
    );
  }
}

class DescriptionBlock extends SizeComponent {
  render() {
    const widthCutoff = 930;
    var order = undefined;
    const description = <Description title={this.props.title}
      information={this.props.information} color={this.props.color}/>;
    const image = <DescriptionImage src={PickImageByProportion(this.props.src, 0.9, 0.6)}/>;
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

class WhatWeDo extends Component {

  render(){
    const data = [
      {
        title: 'Leadership',
        information: `Our chapter offers opportunities for its members to
          strengthen their leadership skills through semester-long officer
          positions. Elections are held each semester, and these provide
          chances for brothers to learn and grow as leaders in the community.`,

        src: 'SemiFall16.jpg',
        orientation: 'lr',
        color: '#065bbe'
      },
      {
        title: 'Friendship',
        information: `Besides serving together, we also have fun together! We
          hold socials, weekly dinners, and our traditional APO goes to Bella
          Union events on Thursdays as events in which brothers and pledges can
          bond. We also hold semi-formals, sectional and regional conferences,
          and retreats where the APO family comes together, both at Duke and at
          other colleges.`,
        src: 'Couch.jpg',
        orientation: 'rl',
        color: '#FFC107'
      },
      {
        title: 'Service',
        information: `Participation in service is what APO is all about.
        Throughout the week, projects include tutoring high school students,
        doing science experiments with children, playing with kids at the Boys
        and Girls Club, tending crops at the Duke Campus Farm, building homes
        with Habitat for Humanity, assisting the elderly at a local
        nursing home, and even taking care of tigers at Carolina Tiger Rescue!`,
        src: 'Stream.jpg',
        orientation: 'lr',
        color: '#065bbe'
      }
    ];

    const blocks = [];
    data.forEach(function(block){
      blocks.push(
        <div className={`routes-home-whyapo-block`}>
          <DescriptionBlock title={block.title} src={block.src}
            information={block.information} color={block.color}
            orientation={block.orientation}/>
        </div>
      );
    });

    return (
      <div className={`routes-home-whyapo-container`}>
        <div className={`routes-home-whyapo-header-container`}>
          <h1 className={`routes-home-whyapo-header`}>
            Why APO?
          </h1>
        </div>
        <div className={`routes-home-whyapo-info-container`}>
          {blocks}
        </div>
      </div>
    );
  }

}

export default WhatWeDo;
