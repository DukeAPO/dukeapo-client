// React and Utils
import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

class JoinListServeButton extends Component {
  render() {
    var listServeButtonStyle = {
      borderRadius: '16px',
      border: '1px solid',
      textAlign: 'center',
    }
    if(this.props.flatButtonStyle){
      for(var key in this.props.flatButtonStyle){
        listServeButtonStyle[key] = this.props.flatButtonStyle[key];
      }
    }
    return (
      <FlatButton style={listServeButtonStyle} fullWidth={this.props.fullWidth}
        href={'http://eepurl.com/cwEmij'}>
        <h4 className={`global-button-text`}>
            &nbsp; Join our list serv &nbsp;
        </h4>
      </FlatButton>
    );
  }
}

JoinListServeButton.defaultProps = {
  fullWidth: true,
  flatButtonStyle: undefined,
}

export default JoinListServeButton;
