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
import Link from '../Link';
import s from './Navigation.css';
import FlatButton from 'material-ui/FlatButton';
var scrollIntoView = require('scroll-into-view');

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

class Navigation extends React.Component {
  render() {
    const navs = [];
    this.props.navigation.forEach(function(navItem){
      navs.push(<NavButton label={navItem.label} scrollToId={navItem.scrollToId} />);
    });
    return (
      <nav>
        {navs}
      </nav>
    );
  }

}

export default Navigation;
