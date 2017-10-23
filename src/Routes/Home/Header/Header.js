// React and Utils
import React, { Component } from 'react';
import SizeComponent from '../../../Components/SizeComponent';
import scrollIntoView from 'scroll-into-view';
import { PickImageByProportion } from '../../../Util/PickImage.js';

// Material UI
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

// Style
import './Header.css';

const widthCutoff = 1020;
const drawerContainerStyle = {
  maxWidth: '30%'
};
const toolbarStyle = {
  backgroundColor:'#fff'
};
const logoUrl = PickImageByProportion('DukeApoLogoBlack.png', 0.4, .3);


function scrollIntoViewById(id) {
  scrollIntoView(document.getElementById(id));
};

/*
  To be used to regular full screen with width  >= widthCutoff.
*/
class NavButton extends Component {
  render() {
    return (
      <FlatButton onClick={() => scrollIntoViewById(this.props.scrollId)}>
        <a className={`routes-home-header-label`}>
          {this.props.label}
        </a>
      </FlatButton>
    );
  }
};

// To be used with smaller screen with width <= widthCutoff.
class NavMenuItem extends Component {
  render() {
    const onClickWithCallback = function() {
      scrollIntoView(document.getElementById(this.props.scrollId));
      this.props.callback();
    }.bind(this);
    return (
      <MenuItem primaryText={this.props.label}
        onClick={onClickWithCallback} />
    );
  }
};

class Navigation extends SizeComponent {
  constructor() {
    super();
    this.state = {openMenu: false,};
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({openMenu: !this.state.openMenu});
  }

  render() {
    const navs = [];
    const closeMenu = function(){
      this.setState({openMenu: false});
    }.bind(this);
    var order = undefined;

    if(this.state.width < widthCutoff) {
      this.props.navigation.forEach(function(navItem) {
        navs.push(
          <NavMenuItem label={navItem.label} scrollId={navItem.scrollId}
            callback={closeMenu}/>
        );
      });
      order = (
        <div>
          <IconButton onClick={this.toggleMenu}>
            <FontIcon className={`global-material-icons`}>menu</FontIcon>
          </IconButton>
          <Drawer open={this.state.openMenu} openSecondary={true} docked={false}
            onRequestChange={(openMenu) => this.setState({openMenu})}
            containerStyle={drawerContainerStyle}>
            {navs}
          </Drawer>
        </div>
      );
    }
    else {
      this.props.navigation.forEach(function(navItem){
        navs.push(
          <NavButton label={navItem.label} scrollId={navItem.scrollId} />
        );
      });
      order = navs;
    }
    return (
      <nav>
        {order}
      </nav>
    );
  }
};

class Header extends Component {

//<img className={s.logo} src={logo} alt="APO logo" />
  render() {
    var img = <img src={logoUrl} className={`routes-home-header-logo`}
      alt="APO Logo"/>;
    return (
      <header className={`routes-home-header-head`}>
        <div className={`routes-home-header-container`}>
          <Toolbar style={toolbarStyle}>
            <ToolbarGroup firstChild={true}>
              {img}
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
