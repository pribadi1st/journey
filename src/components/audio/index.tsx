import { useEffect } from 'react';

const AudioPlayer = () => {
  useEffect(() => {
    const audioElement = new Audio('/powder-snow.m4a');
    audioElement.loop = true;
    audioElement.play();


    return () => {
      audioElement.pause();
    };
  }, []);

  return null;
};

export default AudioPlayer;