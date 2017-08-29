import React from 'react';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import s from './Statistics.css';
import StatisticsContainer from './StatisticsContainer.js';
import ApoClock from '../Assets/ApoClock.png';
import Books from '../Assets/Books.png';
import Socials from '../Assets/Socials.png';
import Pledges from '../Assets/Pledges.png';
import Brothers from '../Assets/Brothers.png';

const firstWidthCutoff = 690;
const secondWidthCutoff = 1120;

class Statistics extends React.Component {

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

  wrapTable(row) {
    return (
      <Table style={{backgroundColor: '#065bbe'}}>
        <TableBody displayRowCheckbox={false}>
          <TableRow displayBorder={false} selectable={false}>
            {row}
          </TableRow>
        </TableBody>
      </Table>
    );
  }

  constructTable(stats, numCol) {
    var order = [];
    var cIndex = 0;
    var row = [];
    for(var i = 0; i < stats.length; i++){
      row.push(<TableRowColumn>{stats[i]}</TableRowColumn>)
      cIndex++;
      if(cIndex === numCol){
        order.push(this.wrapTable(row.slice()));
        row = [];
        cIndex = 0;
      }
    }
    if(row.length){
      order.push(this.wrapTable(row.slice()));
    }
    row = [];
    return order;
  }

  render(){
    const data = [
      {
        number: 2171,
        description: "Service Hours",
        src: ApoClock,
      },
      {
        number: 91,
        description: "Service Events",
        src: Books,
      },
      {
        number: 92,
        description: "Socials",
        src: Socials,
      },
      {
        number: 45,
        description: "Brothers",
        src: Brothers,
      },
      {
        number: 27,
        description: "Pledges",
        src: Pledges,
      },
    ];
    var order = undefined;
    var stats = [];
    if(this.state.width < firstWidthCutoff) {
      data.forEach(function(element) {
        stats.push(<StatisticsContainer number={element.number}
          description={element.description} src={element.src}
          small={true} />)
      });
      order = this.constructTable(stats, 1);
    }
    else{
      data.forEach(function(element) {
        stats.push(<StatisticsContainer number={element.number}
          description={element.description} src={element.src}/>)
      });
      if(this.state.width < secondWidthCutoff){
        order = this.constructTable(stats, 3);
      }
      else{
        order = this.constructTable(stats, 5);
      }
    }

    return (
      <div className={s.container}>
        <h1 className={s.title}>
          Numbers From Last Semester
        </h1>
        {order}
      </div>
    );
  }

}

export default Statistics;
