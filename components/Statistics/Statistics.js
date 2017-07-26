import React from 'react';
import {Table, TableBody} from 'material-ui/Table';
import s from './Statistics.css';
import StatisticsContainer from './StatisticsContainer.js';
import logo from '../Assets/DukeApoLogoBlack.png';

class Statistics extends React.Component {

  render(){
    return (
      <div className={s.container}>
        <h1 className={s.title}>
          Numbers From Last Semester
        </h1>
        <Table style={{backgroundColor: '#065bbe'}}>
          <TableBody displayRowCheckbox={false}>
            <StatisticsContainer number={100} description={"service hours"} src={logo}/>
            <StatisticsContainer number={100} description={"service hours"} src={logo}/>
            <StatisticsContainer number={100} description={"service hours"} src={logo}/>
            <StatisticsContainer number={100} description={"service hours"} src={logo}/>
            <StatisticsContainer number={100} description={"service hours"} src={logo}/>
          </TableBody>
        </Table>
      </div>
    );
  }

}

export default Statistics;
