/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

import s from './Navigation.css';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MaterialIcons from '../CSS/MaterialIcons.css';

var scrollIntoView = require('scroll-into-view');

const widthCutoff = 1020;

class NavButton extends React.Component {

  render() {
    return (
      <FlatButton onClick={() => scrollIntoView(document.getElementById(this.props.scrollToId))}>
        <a className={s.label}>
          {this.props.label}
        </a>
      </FlatButton>
    );
  }
}

class NavMenuItem extends React.Component {
  render() {
    return (
      <MenuItem
      primaryText={this.props.label}
      onClick={() => scrollIntoView(document.getElementById(this.props.scrollToId))}/>
    );
  }
}

class Navigation extends React.Component {

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

  render() {
    const navs = [];
    var order = undefined;
    if(this.state.width < widthCutoff){
      this.props.navigation.forEach(function(navItem) {
        navs.push(<NavMenuItem label={navItem.label} scrollToId={navItem.scrollToId} />)
      });
      order = (
        <IconMenu
        iconButtonElement={
          <IconButton>
            <FontIcon className={MaterialIcons.materialIcons}>menu</FontIcon>
          </IconButton>}>
          {navs}
        </IconMenu>
      );
    }
    else{
      this.props.navigation.forEach(function(navItem){
        navs.push(<NavButton label={navItem.label} scrollToId={navItem.scrollToId} />);
      });
      order = navs;
    }
    return (
      <nav>
        {order}
      </nav>
    );
  }

}

export default Navigation;
