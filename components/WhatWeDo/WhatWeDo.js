import React from 'react';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import s from './WhatWeDo.css';
import shadow from '../Image/Image.css';
import banner from '../Assets/DukeApoBanner.png'


class WhatWeDoDescription extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <h3 className={`${s.description} ${s.title}`}
          style={{backgroundColor: this.props.color}}>
          {this.props.title}
        </h3>
        <p className={`${s.description} ${s.information}`} style={{flexGrow: '1'}}>
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

  render() {
    const description = (
      <TableRowColumn style={{width: '30%'}}>
        <WhatWeDoDescription title={this.props.title}
          information={this.props.information} color={this.props.color}/>
      </TableRowColumn>
    );
    const image = (
      <TableRowColumn style={{width: '60%'}}>
        <WhatWeDoImage src={this.props.src}/>
      </TableRowColumn>
    );
    var order = undefined;
    if(this.props.orientation === 'lr'){
      order = (
        <TableRow>
          {description}
          {image}
        </TableRow>
      );
    }else if(this.props.orientation === 'rl'){
      order = (
        <TableRow>
          {image}
          {description}
        </TableRow>
      );
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
        information: 'Here\'s to Alpha Phi Omega, Loyal Brothers we, \
          True to self and to each other, firm in loyalty. \
          Daily working, daily striving, ever more to be \
          True to Alpha Phi Omega, Our Fraternity. \
          Brothers clasp the hands of Brothers, strong the circle we \
          Ever mindful, ever serving all humanity. \
          Now we raise our grateful voices in our song to thee:\
          True to Alpha Phi Omega, may we always be.',
        src: banner,
        orientation: 'lr',
        color: '#065bbe'
      },
      {
        title: 'Friendship',
        information: 'Here\'s to Alpha Phi Omega, Loyal Brothers we, \
          True to self and to each other, firm in loyalty. \
          Daily working, daily striving, ever more to be \
          True to Alpha Phi Omega, Our Fraternity. \
          Brothers clasp the hands of Brothers, strong the circle we \
          Ever mindful, ever serving all humanity. \
          Now we raise our grateful voices in our song to thee:\
          True to Alpha Phi Omega, may we always be.',
        src: banner,
        orientation: 'rl',
        color: '#FFC107'
      },
      {
        title: 'Service',
        information: 'Here\'s to Alpha Phi Omega, Loyal Brothers we, \
          True to self and to each other, firm in loyalty. \
          Daily working, daily striving, ever more to be \
          True to Alpha Phi Omega, Our Fraternity. \
          Brothers clasp the hands of Brothers, strong the circle we \
          Ever mindful, ever serving all humanity. \
          Now we raise our grateful voices in our song to thee:\
          True to Alpha Phi Omega, may we always be.',
        src: banner,
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
          What We Do
        </h1>
        <div style={{padding:'0px 10px 20px 10px'}}>
          {blocks}
        </div>
      </div>
    );
  }

}

export default WhatWeDo;
