require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import IntroComponents from './Intro';


class AppComponent extends React.Component {

  render() {

    return(
      <div className="page-wrapper">
        <IntroComponents/>
      </div>
    );

  }
}

AppComponent.defaultProps = {

};

export default AppComponent;
