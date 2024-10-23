import React from 'react';
import WaveSurfer from 'wavesurfer.js';
import { useVideoStore } from '../store/videoStore';

export const Timeline = () => {
  const { currentTime, duration, setCurrentTime } = useVideoStore();

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - bounds.left) / bounds.width;
    setCurrentTime(percent * duration);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div 
        className="h-24 bg-gray-700 rounded cursor-pointer relative"
        onClick={handleTimelineClick}
      >
        <div 
          className="absolute top-0 bottom-0 bg-blue-500 opacity-20"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
        {/* Markers for transitions and audio tracks would go here */}
      </div>
      <div className="mt-2 flex justify-between text-sm text-gray-400">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};