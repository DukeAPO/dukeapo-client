import React from 'react';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import s from './Statistics.css';
import StatisticsContainer from './StatisticsContainer.js';
import ApoClock from '../Assets/ApoClock.png';
import Books from '../Assets/Books.png';
import Socials from '../Assets/Socials.png';
import Pledges from '../Assets/Pledges.png';
import Brothers from '../Assets/Brothers.png';

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
    const firstWidthCutoff = 1120;
    const secondWidthCutoff = 500;
    const stats = [
      <StatisticsContainer number={2171} description={"service hours"} src={ApoClock}/>,
      <StatisticsContainer number={91} description={"service events"} src={Books}/>,
      <StatisticsContainer number={92} description={"socials"} src={Socials}/>,
      <StatisticsContainer number={45} description={"brothers"} src={Brothers}/>,
      <StatisticsContainer number={27} description={"pledges"} src={Pledges}/>
    ];
    var order = [];
    if(this.state.width > firstWidthCutoff){
      order = this.constructTable(stats, 5);
    }
    else if(this.state.width > secondWidthCutoff){
      order = this.constructTable(stats, 3);
    }
    else{
      order = this.constructTable(stats, 1);
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
