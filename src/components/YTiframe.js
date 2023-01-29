import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

class YTiframe extends Component {
  render() {
    return (
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Y19tsLWrtRU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}

export default YTiframe;
