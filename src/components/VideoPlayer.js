import React, { useRef, useEffect} from 'react';

const VideoPlayer = ({ videoUrl }) => {

  const videoRef = useRef(null)

  useEffect(() => {
    const videoElement = videoRef.current;
    console.log("ooo hey")
    return () => {
      videoElement.pause();
      videoElement.src=''
      console.log("Oh looks like it works???")
    }
  }, [])

  useEffect(() => {
    videoRef.current.src = videoUrl;
    console.log("Maybe hey?")
  }, [videoUrl])

  return (
      <video controls preload="none" loading="lazy" className="max-w-[250px] h-[444px]" ref={videoRef}>
        <source src={videoUrl} type="video/mp4" />
      </video>
  );
};

export default VideoPlayer