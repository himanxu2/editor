import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon, Loader } from 'lucide-react';

export const AIImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    try {
      // AI image generation logic would go here
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated delay
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-blue-500" />
        <h3 className="text-lg font-semibold">AI Image Generator</h3>
      </div>
      
      <div className="space-y-3">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the image you want to generate..."
          className="w-full h-24 bg-gray-700 rounded p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <button
          onClick={handleGenerate}
          disabled={isGenerating || !prompt.trim()}
          className="w-full py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 rounded flex items-center justify-center gap-2 transition-colors"
        >
          {isGenerating ? (
            <>
              <Loader className="w-4 h-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <ImageIcon className="w-4 h-4" />
              Generate Image
            </>
          )}
        </button>
      </div>
    </div>
  );
};