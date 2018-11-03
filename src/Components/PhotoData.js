import React, { Component } from 'react';
import Photo from './Photo';
class PhotoData extends Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, index) => (
          <Photo key={index} post={post} />
        ))}
      </div>
    );
  }
}

export default PhotoData;
