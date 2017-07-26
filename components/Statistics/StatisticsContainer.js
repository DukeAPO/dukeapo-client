import React from 'react';
import s from './StatisticsContainer.css'

class StatisticsContainer extends React.Component {

  render(){
    return (
      <div className={s.container}>
        <h1 className={s.number}>
          {this.props.number}
        </h1>
        <h2 className={s.description}>
          {this.props.description}
        </h2>
        <img src={this.props.src} className={s.icon}/>
      </div>
    );
  }

}

export default StatisticsContainer;
