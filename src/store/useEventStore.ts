import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Event {
  title: string;
  speaker: string;
  date: string;
  startTime: string;
  endTime: string;
}

interface EventState {
  events: Event[];

  addEvent: (data: Event) => void;
  deleteEvent: (index: number) => void;
}

export const useEventStore = create<EventState>()(
  persist(
    (set) => ({
      events: [],

      addEvent: (data) =>
        set((state) => ({
          events: [data, ...state.events],
        })),

      deleteEvent: (index) =>
        set((state) => ({
          events: state.events.filter((_, i) => i !== index),
        })),
    }),
    {
      name: "event-storage",
    }
  )
);