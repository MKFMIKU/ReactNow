require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


import PhotoComponent from './Photo';
import UploadComponent from './Upload';


//从数据库中获取图片的信息
var imageData = require('json!../db/data.json');
//当前索引
var indexNow = 0;

class AppComponent extends React.Component {

  render() {

    return(
      <div className="content">
        <PhotoComponent data={imageData[indexNow]}/>

        <UploadComponent/>
      </div>
    );

  }
}

AppComponent.defaultProps = {

};

export default AppComponent;
