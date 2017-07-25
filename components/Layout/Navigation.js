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

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <nav className="mdl-navigation" ref={node => (this.root = node)}>
        <Link className={s.link} to="/">Home</Link>
        <Link className={s.link} to="/stats">Stats</Link>
        <Link className={s.link} to="/whatWeDo">What We Do</Link>
        <Link className={s.link} to="/recruitment">Recruitment</Link>
      </nav>
    );
  }

}

export default Navigation;
