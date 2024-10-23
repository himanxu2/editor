import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Volume1, VolumeX } from 'lucide-react';
import { useVideoStore } from '../store/videoStore';
import ReactSlider from 'react-slider';

export const Controls = () => {
  const { 
    isPlaying, 
    togglePlay, 
    volume, 
    setVolume,
    speed,
    setSpeed
  } = useVideoStore();

  const VolumeIcon = volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <SkipBack className="w-5 h-5" />
        </button>
        <button 
          className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <SkipForward className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <button 
            className="p-2 hover:bg-gray-700 rounded-full"
            onClick={() => setVolume(volume === 0 ? 1 : 0)}
          >
            <VolumeIcon className="w-5 h-5" />
          </button>
          <ReactSlider
            className="w-24 h-1 bg-gray-600 rounded-full"
            thumbClassName="w-3 h-3 bg-blue-500 rounded-full -mt-1"
            trackClassName="h-1 bg-blue-500 rounded-full"
            value={volume * 100}
            onChange={(value) => setVolume(value / 100)}
          />
        </div>

        <select
          className="bg-gray-700 text-sm rounded px-2 py-1"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        >
          <option value="0.5">0.5x</option>
          <option value="1">1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
      </div>
    </div>
  );
};