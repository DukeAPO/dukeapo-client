import { Component } from 'react';

class SizeComponent extends Component {

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
};

export default SizeComponent;
