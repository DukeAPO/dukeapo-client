import React from 'react';
import font from '../CSS/Font.css';
import s from './StatisticsContainer.css';

class StatisticsContainer extends React.Component {

  render(){
    var order = undefined;
    if(this.props.small){
      order = (
        <div>
          <table style={{width: '100%'}}>
            <tr>
              <td className={s.row}>
                <img src={this.props.src} className={s.icon}/>
              </td>
              <td className={`${s.row} ${s.descriptioncol}`}>
                <tr>
                  <h1 className={`${font.h1} ${s.number}`}>
                    {this.props.number}
                  </h1>
                  <h2 className={s.description}>
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
          <h1 className={`${font.h1} ${s.number}`}>
            {this.props.number}
          </h1>
          <h2 className={s.description}>
            {this.props.description}
          </h2>
          <img src={this.props.src} className={s.icon}/>
        </div>
      );
    }
    return (
      <div className={s.container}>
      {order}
      </div>
    );
  }

}

StatisticsContainer.defaultProps = {
  small: false,
}

export default StatisticsContainer;
