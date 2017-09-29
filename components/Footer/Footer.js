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
            &Alpha; &Phi; &Omega; : &Lambda; &Nu; Chapter
          </h2>
        </ToolbarGroup>
      </Toolbar>
    </footer>
  );
}

export default Footer;
