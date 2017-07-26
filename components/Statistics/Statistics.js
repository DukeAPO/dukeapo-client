import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import s from './Statistics.css';
import StatisticsContainer from './StatisticsContainer.js'


class Statistics extends React.Component {

  render() {
    return (
      <Table>
        <TableBody displayRowCheckbox={false}>
          <TableRowColumn>
              <StatisticsContainer number={100} description={"temp"}/>
          </TableRowColumn>
          <TableRowColumn>2</TableRowColumn>
          <TableRowColumn>3</TableRowColumn>
        </TableBody>
      </Table>
    );
  }

}

export default Statistics;
