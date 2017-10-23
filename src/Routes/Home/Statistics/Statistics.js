// React and Utils
import React, { Component } from 'react';
import SizeComponent from '../../../Components/SizeComponent';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import { PickImageByPx } from '../../../Util/PickImage.js';

// Style
import './Statistics.css';

const firstWidthCutoff = 690;
const secondWidthCutoff = 1120;

const tableStyle = {
  backgroundColor: '#065bbe'
};

const data = [
  {
    number: 2171,
    description: "Service Hours",
    src: 'ApoClock.png',
  },
  {
    number: 91,
    description: "Service Events",
    src: 'Books.png',
  },
  {
    number: 92,
    description: "Socials",
    src: 'Socials.png',
  },
  {
    number: 45,
    description: "Brothers",
    src: 'Brothers.png',
  },
  {
    number: 27,
    description: "Pledges",
    src: 'Pledges.png',
  },
];

class StatisticsContainer extends Component {
  render(){
    var order = undefined;
    if(this.props.small){
      order = (
        <div>
          <table className={`routes-home-statistics-table`}>
            <tr>
              <td className={`routes-home-statistics-row`}>
                <img src={this.props.src} className={`routes-home-statistics-icon`} alt={"Statistics Icon"} />
              </td>
              <td className={`routes-home-statistics-row routes-home-statistics-description-col`}>
                <tr>
                  <h1 className={`routes-home-statistics-number`}>
                    {this.props.number}
                  </h1>
                  <h2 className={`routes-home-statistics-description`}>
                    {this.props.description}
                  </h2>
                </tr>
              </td>
            </tr>
          </table>
        </div>
      );
    }
    else{
      order = (
        <div>
          <h1 className={`routes-home-statistics-number`}>
            {this.props.number}
          </h1>
          <h3 className={`routes-home-statistics-description`}>
            {this.props.description}
          </h3>
          <img src={this.props.src} className={`routes-home-statistics-icon`} alt={"Statistics Icon"}/>
        </div>
      );
    }
    return (
      <div className={`routes-home-statistics-inner-container`}>
      {order}
      </div>
    );
  }
};

StatisticsContainer.defaultProps = {
  small: false,
};

class Statistics extends SizeComponent {

  wrapTable(row) {
    return (
      <Table style={tableStyle}>
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
    var order = undefined;
    var stats = [];
    if(this.state.width < firstWidthCutoff) {
      data.forEach(function(element) {
        var src = PickImageByPx(element.src, 128, 128);
        stats.push(<StatisticsContainer number={element.number}
          description={element.description} src={src}
          small={true} />)
      });
      order = this.constructTable(stats, 1);
    }
    else{
      data.forEach(function(element) {
        var src = PickImageByPx(element.src, 128, 128);
        stats.push(<StatisticsContainer number={element.number}
          description={element.description} src={src}/>)
      });
      if(this.state.width < secondWidthCutoff){
        order = this.constructTable(stats, 3);
      }
      else{
        order = this.constructTable(stats, 5);
      }
    }

    return (
      <div className={`routes-home-statistics-container`}>
        <h1 className={`routes-home-statistics-title`}>
          Numbers From Last Semester
        </h1>
        {order}
      </div>
    );
  }
};

export default Statistics;
