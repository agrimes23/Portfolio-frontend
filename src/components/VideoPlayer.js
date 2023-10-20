import React from 'react';

const VideoPlayer = ({ videoUrl }) => {
  return (
      <video controls preload="none" className="max-w-[250px] h-[444px]">
        <source src={videoUrl} type="video/mp4" />
      </video>
  );
};

export default VideoPlayer