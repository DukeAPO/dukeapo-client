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
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import s from './Footer.css';

function Footer() {
  return (
    <footer className={s.footer}>
      <Toolbar style={{ backgroundColor: '#424242' }}>
        <ToolbarGroup firstChild={true}>
          <h2 className={s.name}>
            Duke University - Alpha Phi Omega (&Alpha; &Phi; &Omega;) - Lambda Nu (&Lambda; &Nu;) Chapter
          </h2>
        </ToolbarGroup>
        <ToolbarGroup>
          <IconButton href={'https://www.facebook.com/DukeAlphaPhiOmega/'}>
            <SvgIcon viewBox={'0 0 512 512'}>
              <path fill="#fff" d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z" />
            </SvgIcon>
          </IconButton>
        </ToolbarGroup>
      </Toolbar>
    </footer>
  );
}

export default Footer;
