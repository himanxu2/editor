import React, { useState } from 'react';
import { Download, Settings as SettingsIcon } from 'lucide-react';

const exportFormats = [
  { id: 'mp4', name: 'MP4', quality: ['1080p', '720p', '480p'] },
  { id: 'webm', name: 'WebM', quality: ['1080p', '720p', '480p'] },
  { id: 'gif', name: 'GIF', quality: ['High', 'Medium', 'Low'] }
];

export const ExportOptions = () => {
  const [selectedFormat, setSelectedFormat] = useState(exportFormats[0]);
  const [selectedQuality, setSelectedQuality] = useState(selectedFormat.quality[0]);
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      // Export logic would go here
      await new Promise(resolve => setTimeout(resolve, 3000)); // Simulated delay
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Download className="w-5 h-5 text-blue-500" />
        <h3 className="text-lg font-semibold">Export</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Format</label>
          <select
            value={selectedFormat.id}
            onChange={(e) => {
              const format = exportFormats.find(f => f.id === e.target.value)!;
              setSelectedFormat(format);
              setSelectedQuality(format.quality[0]);
            }}
            className="w-full bg-gray-700 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {exportFormats.map((format) => (
              <option key={format.id} value={format.id}>
                {format.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">Quality</label>
          <select
            value={selectedQuality}
            onChange={(e) => setSelectedQuality(e.target.value)}
            className="w-full bg-gray-700 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {selectedFormat.quality.map((quality) => (
              <option key={quality} value={quality}>
                {quality}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleExport}
          disabled={isExporting}
          className="w-full py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 rounded flex items-center justify-center gap-2 transition-colors"
        >
          {isExporting ? (
            <>
              <SettingsIcon className="w-4 h-4 animate-spin" />
              Exporting...
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              Export Video
            </>
          )}
        </button>
      </div>
    </div>
  );
};