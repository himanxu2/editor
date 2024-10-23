import React from 'react';
import { useVideoStore } from '../store/videoStore';
import { Transition } from 'lucide-react';

const transitionEffects = [
  { id: 'fade', name: 'Fade' },
  { id: 'dissolve', name: 'Dissolve' },
  { id: 'slide', name: 'Slide' },
  { id: 'wipe', name: 'Wipe' },
  { id: 'zoom', name: 'Zoom' }
];

export const Transitions = () => {
  const addTransition = useVideoStore((state) => state.addTransition);

  const handleAddTransition = (effectId: string) => {
    addTransition({
      id: Date.now(),
      type: effectId,
      duration: 1,
      position: 0
    });
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Transition className="w-5 h-5 text-blue-500" />
        <h3 className="text-lg font-semibold">Transitions</h3>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {transitionEffects.map((effect) => (
          <button
            key={effect.id}
            onClick={() => handleAddTransition(effect.id)}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors"
          >
            {effect.name}
          </button>
        ))}
      </div>
    </div>
  );
};