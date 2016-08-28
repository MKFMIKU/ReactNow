require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import IntroComponents from './Intro';
import PhotoComponents from './Photo';

var imageData = require('json!../db/data.json');
var indexNow = 0;

class AppComponent extends React.Component {

  render() {

    return(
      <div className="page-wrapper">
        <IntroComponents/>
        <div className="main">
          <PhotoComponents data={imageData[indexNow]}/>

          <div className="About" id="about">
            <p>
              MIT License
              <br/>
              Copyright (c) 2016 CLF_Studio
              <br/>
              Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files (the "Software"), to deal
              in the Software without restriction, including without limitation the rights
              to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
              <br/>
              The above copyright notice and this permission notice shall be included in all
              copies or substantial portions of the Software.

            </p>
          </div>
        </div>

        <footer>
          <section>
            <a href="http://www.conglinfeng.com/">
              <img src="images/logo.svg" />
              <p>CLF_Studio</p>
            </a>
          </section>

          <section>
            <a href="http://www.kffuck.com/"><h2>MKFMIKU</h2></a>
          </section>

        </footer>
      </div>
    );

  }
}

AppComponent.defaultProps = {

};

export default AppComponent;
