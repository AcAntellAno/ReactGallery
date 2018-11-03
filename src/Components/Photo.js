import React, { Component } from 'react';

class Photo extends Component {
  render() {
    const post = this.props.post;
    return <figure className="figure" />;
  }
}

export default Photo;
