import React from 'react';
import '../iframe.css';

const vhv_ep1 = () => {
  return (
    <div class="container-iframe">
      <iframe
        class="responsive-iframe"
        src="https://www.youtube.com/embed/Y19tsLWrtRU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <a href="/img/twitter.png" download>
        <button>Dowload image</button>
      </a>
    </div>
  );
};

export default vhv_ep1;
