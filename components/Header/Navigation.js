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

class NavButton extends React.Component {
  render() {
    return (
      <FlatButton>
        <Link className={s.link} to={this.props.to}>
          {this.props.label}
        </Link>
      </FlatButton>
    );
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <NavButton label={"Home"} to={"/"} />
        <NavButton label={"Stats"} to={"/stats"} />
        <NavButton label={"What We Do"} to={"/whatWeDo"} />
        <NavButton label={"Recruitment"} to={"/recruitment"} />
      </nav>
    );
  }

}

export default Navigation;
