// React and Utils
import React, { Component } from 'react';

import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Recruitment from './Recruitment';
import Statistics from './Statistics';
import Welcome from './Welcome';
import WhyApo from './WhyApo';

class Home extends Component {
  render() {
    const welcome = <div id={"Home"}><Welcome/></div>;
    const statistics = <div id={"Statistics"}><Statistics/></div>;
    const whyApo = <div id={"WhyApo"}><WhyApo/></div>;
    const recruitment = <div id={"Recruitment"}><Recruitment/></div>;
    const contact = <div id={"Contact"}><Contact/></div>;
    const navigation = [
      {
        label: 'Home',
        scrollId: 'Home'
      },
      {
        label: 'Statistics',
        scrollId: 'Statistics'
      },
      {
        label: 'Why Apo?',
        scrollId: 'WhyApo'
      },
      {
        label: 'Recruitment',
        scrollId: 'Recruitment'
      },
      {
        label: 'Contact',
        scrollId: 'Contact'
      }
    ];
    return (
      <div>
        <Header navigation={navigation}/>
        <Banner/>
        {welcome}
        {statistics}
        {whyApo}
        {recruitment}
        {contact}
        <Footer/>
      </div>
    );
  }
};

export default Home;
