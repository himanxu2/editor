import { create } from 'zustand';

interface VideoState {
  videoFile: File | null;
  currentTime: number;
  duration: number;
  isPlaying: boolean;
  volume: number;
  speed: number;
  selectedFilter: string;
  transitions: any[];
  audioTracks: any[];
  setVideoFile: (file: File) => void;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
  setSpeed: (speed: number) => void;
  setFilter: (filter: string) => void;
  addTransition: (transition: any) => void;
  addAudioTrack: (track: any) => void;
}

export const useVideoStore = create<VideoState>((set) => ({
  videoFile: null,
  currentTime: 0,
  duration: 0,
  isPlaying: false,
  volume: 1,
  speed: 1,
  selectedFilter: 'none',
  transitions: [],
  audioTracks: [],
  setVideoFile: (file) => set({ videoFile: file }),
  setCurrentTime: (time) => set({ currentTime: time }),
  setDuration: (duration) => set({ duration: duration }),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setVolume: (volume) => set({ volume }),
  setSpeed: (speed) => set({ speed }),
  setFilter: (filter) => set({ selectedFilter: filter }),
  addTransition: (transition) => set((state) => ({ 
    transitions: [...state.transitions, transition] 
  })),
  addAudioTrack: (track) => set((state) => ({ 
    audioTracks: [...state.audioTracks, track] 
  })),
}));