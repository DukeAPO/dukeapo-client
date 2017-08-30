/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from '../../components/Image';
import Statistics from '../../components/Statistics';
import WhatWeDo from '../../components/WhatWeDo';
import Welcome from '../../components/Welcome';
import banner from '../../components/Assets/DukeApoBanner.png';
import Recruitment from '../../components/Recruitment';

class HomePage extends React.Component {

  static propTypes = {
  };

  render() {
    const welcome = <div id={"Welcome"}><Welcome/></div>;
    const statistics = <div id={"Stats"}><Statistics/></div>;
    const whatWeDo = <div id={"WhatWeDo"}><WhatWeDo/></div>;
    const recruitment = <div id={"Recruitment"}><Recruitment/></div>;
    const navigation = [
      {
        label: 'Home',
        scrollToId: ''
      },
      {
        label: 'Stats',
        scrollToId: 'Stats'
      },
      {
        label: 'Why APO?',
        scrollToId: 'WhatWeDo'
      },
      {
        label: 'Recruitment',
        scrollToId: 'Recruitment'
      }
    ];
    return (
      <div>
        <Header navigation={navigation}/>
        <Image src={banner}/>
        {welcome}
        {statistics}
        {whatWeDo}
        {recruitment}
        <Footer/>
      </div>
    );
  }

}

export default HomePage;
