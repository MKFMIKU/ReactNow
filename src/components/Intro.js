require('!style!css!sass!../styles/Intro.scss');

import React from 'react';
import UploadComponent from './Upload';

class IntroComponent extends React.Component {

  upload() {

  }

  render() {

    return(
      <div className="intro">
        <header role="banner">
          <h1>Wild and Make DataBase</h1>
          <h2>Open <br/>Source</h2>
        </header>
        <div className="summary" role="article">
          <p>A database store the human photo in wild and make <br/>
          Aim at find a way to deoxidization girl's photo</p>

          <p className="icon">
            <a href="#" className="iconfont">&#xe614;</a>
            <a href="#" className="iconfont" onClick={this.upload}>&#xe6a2;</a>
            <a href="#about" className="iconfont">&#xe60a;</a>
            <a href="https://github.com/MKFMIKU/ReactNow" className="iconfont">&#xe662;</a>
          </p>
        </div>
        <div className="side">

        </div>

        <UploadComponent/>

      </div>
    );

  }
}

IntroComponent.defaultProps = {

};

export default IntroComponent;

