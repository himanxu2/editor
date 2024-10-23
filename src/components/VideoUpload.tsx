import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { useVideoStore } from '../store/videoStore';

export const VideoUpload = () => {
  const setVideoFile = useVideoStore((state) => state.setVideoFile);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setVideoFile(acceptedFiles[0]);
    }
  }, [setVideoFile]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.webm', '.mov']
    },
    maxFiles: 1
  });

  return (
    <div
      {...getRootProps()}
      className={`p-6 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-blue-500 bg-blue-50/5' : 'border-gray-600 hover:border-blue-500'}`}
    >
      <input {...getInputProps()} />
      <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
      {isDragActive ? (
        <p className="text-blue-500">Drop your video here...</p>
      ) : (
        <div>
          <p className="text-lg mb-2">Drag & drop your video here</p>
          <p className="text-sm text-gray-400">or click to select a file</p>
          <p className="text-xs text-gray-500 mt-2">Supports MP4, WebM, MOV</p>
        </div>
      )}
    </div>
  );
};