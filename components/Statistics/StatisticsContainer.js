import React from 'react';
import Table from 'material-ui';
import s from './StatisticsContainer.css'
import {TableRowColumn} from 'material-ui/Table';

class StatisticsContainer extends React.Component {

  render(){
    return (
      <TableRowColumn>
        <div className={s.container} >
          <h1 className={s.number}>
            {this.props.number}
          </h1>
          <h2 className={s.description}>
            {this.props.description}
          </h2>
          <img src={this.props.src} className={s.icon}/>
        </div>
      </TableRowColumn>
    );
  }

}

export default StatisticsContainer;
