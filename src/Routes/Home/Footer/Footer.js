import React, { Component } from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

import './Footer.css';

function Footer() {
  return (
    <footer className={`routes-home-footer`}>
      <Toolbar style={{ backgroundColor: '#424242' }}>
        <ToolbarGroup firstChild={true}>
          <p className={`routes-home-footer-name`}>
            &Alpha; &Phi; &Omega; : &Lambda; &Nu; Chapter
          </p>
        </ToolbarGroup>
      </Toolbar>
    </footer>
  );
}

export default Footer;
