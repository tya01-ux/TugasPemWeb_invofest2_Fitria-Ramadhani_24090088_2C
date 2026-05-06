import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Speaker {
  name: string;
  role: string;
  photo: string; // simpan URL / base64
}

interface SpeakerState {
  speakers: Speaker[];

  addSpeaker: (data: Speaker) => void;
  deleteSpeaker: (index: number) => void;
}

export const useSpeakerStore = create<SpeakerState>()(
  persist(
    (set) => ({
      speakers: [],

      addSpeaker: (data) =>
        set((state) => ({
          speakers: [data, ...state.speakers],
        })),

      deleteSpeaker: (index) =>
        set((state) => ({
          speakers: state.speakers.filter((_, i) => i !== index),
        })),
    }),
    {
      name: "speaker-storage",
    },
  ),
);
