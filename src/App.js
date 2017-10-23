import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import CreateFontSizeCSS from './Util/CreateFontSizeCSS.js';
import Home from './Routes/Home/Home.js';

const fontToSize = [
  {
    tag: 'h1',
    upperFontSize: 64,
    lowerFontSize: 26,
    upperScreenWidth: 1280,
    lowerScreenWidth: 400
  },
  {
    tag: 'h2',
    upperFontSize: 40,
    lowerFontSize: 22,
    upperScreenWidth: 1280,
    lowerScreenWidth: 400
  },
  {
    tag: 'h3',
    upperFontSize: 32,
    lowerFontSize: 20,
    upperScreenWidth: 1280,
    lowerScreenWidth: 400
  },
  {
    tag: 'h4',
    upperFontSize: 26,
    lowerFontSize: 18,
    upperScreenWidth: 1280,
    lowerScreenWidth: 400
  },
  {
    tag: 'p',
    upperFontSize: 24,
    lowerFontSize: 16,
    upperScreenWidth: 1280,
    lowerScreenWidth: 400
  }
];

class App extends Component {

  render() {
    /*
    const Header = (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
          </ul>
        </nav>
      </header>
    );
    */
    const Main = (
      <main>
        <Switch>
          <Route exact path='/' component={ Home }/>
        </Switch>
      </main>
    );
    //window.onload = function (){applyFontCSS();};
    document.onreadystatechange = () => {
      if (document.readyState === 'interactive') {
        var css = CreateFontSizeCSS(fontToSize);
        var head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(css);
      }
    };
    return (
      <div>
        {Main}
      </div>
    );
  }
}

export default App;
