import React from 'react';

const mini_karaoke = () => {
  return (
    <div class="container-iframe">
      <iframe
        class="responsive-iframe"
        src="https://www.youtube.com/embed/buOV9EQSCgw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default mini_karaoke;
