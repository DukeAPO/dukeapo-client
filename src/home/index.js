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
import Banner from '../../components/Banner';
import Statistics from '../../components/Statistics';

class HomePage extends React.Component {

  static propTypes = {
  };

  render() {
    const statistics = <div id={"Stats"}><Statistics/></div>;
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
        label: 'What We Do',
        scrollToId: ''
      },
      {
        label: 'Recruitment',
        scrollToId: ''
      }
    ];
    return (
      <div>
        <Header navigation={navigation}/>
        <Banner/>
        {statistics}
        <Footer/>
      </div>
    );
  }

}

export default HomePage;
