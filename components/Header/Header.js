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
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import Navigation from './Navigation';
import s from './Header.css';
import logo from '../Assets/DukeApoLogoBlack.png';

class Header extends React.Component {

  render() {
    return (
      <header className={s.header}>
        <div className={s.container}>
          <Toolbar style={{ backgroundColor:'#fff' }}>
            <ToolbarGroup firstChild={true}>
              <img className={s.logo} src={logo} alt="APO logo" />
            </ToolbarGroup>
            <ToolbarGroup>
              <div>
                <Navigation navigation={this.props.navigation} />
              </div>
            </ToolbarGroup>
          </Toolbar>
        </div>
      </header>
    );
  }

}

export default Header;
