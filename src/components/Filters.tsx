import React from 'react';
import { useVideoStore } from '../store/videoStore';

const filters = [
  { id: 'none', name: 'Normal' },
  { id: 'grayscale', name: 'Grayscale' },
  { id: 'sepia', name: 'Sepia' },
  { id: 'brightness', name: 'Bright' },
  { id: 'contrast', name: 'High Contrast' },
  { id: 'blur', name: 'Blur' },
  { id: 'vintage', name: 'Vintage' },
  { id: 'cool', name: 'Cool' },
  { id: 'warm', name: 'Warm' }
];

export const Filters = () => {
  const { selectedFilter, setFilter } = useVideoStore();

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      <div className="grid grid-cols-3 gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`p-2 rounded text-sm ${
              selectedFilter === filter.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
            onClick={() => setFilter(filter.id)}
          >
            {filter.name}
          </button>
        ))}
      </div>
    </div>
  );
};