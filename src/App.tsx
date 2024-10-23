import React from 'react';
import { VideoUpload } from './components/VideoUpload';
import { Timeline } from './components/Timeline';
import { Controls } from './components/Controls';
import { Transitions } from './components/Transitions';
import { AudioControls } from './components/AudioControls';
import { AIImageGenerator } from './components/AIImageGenerator';
import { ExportOptions } from './components/ExportOptions';
import { VideoPlayer } from './components/VideoPlayer';
import { Filters } from './components/Filters';
import { Settings } from './components/Settings';
import { VideoIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <VideoIcon className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold">AI Video Editor</h1>
          </div>
          <Settings />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 grid grid-cols-12 gap-4">
        {/* Left Sidebar */}
        <div className="col-span-3 space-y-4">
          <VideoUpload />
          <Transitions />
          <Filters />
          <AIImageGenerator />
        </div>

        {/* Center Content */}
        <div className="col-span-6 space-y-4">
          <VideoPlayer />
          <Timeline />
          <Controls />
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3 space-y-4">
          <AudioControls />
          <ExportOptions />
        </div>
      </main>
    </div>
  );
}

export default App;