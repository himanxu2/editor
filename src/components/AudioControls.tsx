import React from 'react';
import { useVideoStore } from '../store/videoStore';
import { Music, Plus } from 'lucide-react';
import ReactSlider from 'react-slider';

export const AudioControls = () => {
  const { audioTracks, addAudioTrack } = useVideoStore();

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      addAudioTrack({
        id: Date.now(),
        file,
        volume: 1,
        startTime: 0
      });
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Music className="w-5 h-5 text-blue-500" />
          <h3 className="text-lg font-semibold">Audio</h3>
        </div>
        <label className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full cursor-pointer">
          <Plus className="w-4 h-4" />
          <input
            type="file"
            className="hidden"
            accept="audio/*"
            onChange={handleAudioUpload}
          />
        </label>
      </div>

      <div className="space-y-4">
        {audioTracks.map((track: any) => (
          <div key={track.id} className="bg-gray-700 p-3 rounded">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm truncate">{track.file.name}</span>
              <button className="text-gray-400 hover:text-white">
                <Music className="w-4 h-4" />
              </button>
            </div>
            <ReactSlider
              className="w-full h-1 bg-gray-600 rounded-full"
              thumbClassName="w-3 h-3 bg-blue-500 rounded-full -mt-1"
              trackClassName="h-1 bg-blue-500 rounded-full"
              value={track.volume * 100}
              onChange={(value) => {
                // Update track volume logic here
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};