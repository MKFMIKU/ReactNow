require('styles/Upload.css');

import React from 'react';


class UploadComponent extends React.Component {
  upload(){
    alert("HHH");
  }
  render(){

    return(
      <div className="upload">
        <section onClick={this.upload}>
          <img src="../images/upload.svg" />
        </section>

        <div className="uploadBoard">
          <div className="wild">
            <span>wild</span>
          </div>

          <div className="make">
            <span>make</span>
          </div>
        </div>
      </div>
    );
  }
}

UploadComponent.defaultProps = {

};

export default UploadComponent;
