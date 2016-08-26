//The component of show one person obj
require('styles/Photo.css');

import React from 'react';


class PhotoComponent extends React.Component {
  render() {
    return (
      <div className="photo">
        <figure>
          <figcaption>
            <h2>Wild</h2>
          </figcaption>
          <img src={this.props.data.wild} />
        </figure>

        <h1>{this.props.data.name} <span>{this.props.data.id}</span></h1>

        <figure>
          <figcaption>
            <h2>Make</h2>
          </figcaption>
          <img src={this.props.data.make} />
        </figure>
      </div>
    );
  }
}

PhotoComponent.defaultProps = {

};

export default PhotoComponent;
