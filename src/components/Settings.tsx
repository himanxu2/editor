import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

export const Settings = () => {
  return (
    <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
      <SettingsIcon className="w-5 h-5" />
    </button>
  );
};