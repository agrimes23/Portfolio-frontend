import React, { useRef, useEffect} from 'react';

const VideoPlayer = ({ videoUrl }) => {

  const videoRef = useRef(null)

  useEffect(() => {
    const videoElement = videoRef.current;
    return () => {
      videoElement.pause();
      videoElement.src=''
    }
  }, [])

  useEffect(() => {
    videoRef.current.src = videoUrl;
  }, [videoUrl])

  return (
      <video controls preload="none" loading="lazy" className="max-w-[250px] h-[444px]" ref={videoRef}>
        <source src={videoUrl} type="video/mp4" />
      </video>
  );
};

export default VideoPlayer