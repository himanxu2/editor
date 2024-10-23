import React, { useRef, useEffect } from 'react';
import { useVideoStore } from '../store/videoStore';

export const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { 
    videoFile, 
    isPlaying, 
    currentTime, 
    speed, 
    volume,
    selectedFilter,
    setDuration 
  } = useVideoStore();

  useEffect(() => {
    if (videoFile && videoRef.current) {
      const url = URL.createObjectURL(videoFile);
      videoRef.current.src = url;
      return () => URL.revokeObjectURL(url);
    }
  }, [videoFile]);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = currentTime;
    }
  }, [currentTime]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  }, [speed]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        className={`w-full h-full ${selectedFilter}`}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />
      {!videoFile && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <p>Upload a video to get started</p>
        </div>
      )}
    </div>
  );
};