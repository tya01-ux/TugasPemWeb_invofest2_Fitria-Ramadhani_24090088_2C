import { useState } from "react";
import { useEventStore } from "../../../store/useEventStore";
import EventCreate from "./EventCreate";
import { FiCalendar, FiClock } from "react-icons/fi";

export default function EventIndex() {
  const [isOpen, setIsOpen] = useState(false);

  const events = useEventStore((state) => state.events);
  const deleteEvent = useEventStore((state) => state.deleteEvent);

  return (
    <div className="relative">
      {/* CONTENT */}
      <div className={isOpen ? "blur-sm pointer-events-none" : ""}>
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-xl font-semibold text-gray-800">Event</h1>
              <p className="text-sm text-gray-500">Kelola event kamu</p>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="bg-red-900 text-white px-4 py-2 rounded-lg"
            >
              + Tambah
            </button>
          </div>

          {/* LIST */}
          <div className="grid md:grid-cols-2 gap-5">
            {events.length === 0 && (
              <p className="text-center text-gray-400 col-span-full">
                Belum ada event
              </p>
            )}

            {events.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  border border-rose-200 border-r-4 border-r-rose-400
                  rounded-xl p-5
                  shadow-md
                "
              >
                <h3 className="font-semibold text-gray-800">{item.title}</h3>

                <p className="text-sm text-gray-500 mt-1">{item.speaker}</p>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FiCalendar className="text-gray-400" />
                  <span>{item.date}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FiClock className="text-gray-400" />
                  <span>
                    {item.startTime} - {item.endTime}
                  </span>
                </div>

                <button
                  onClick={() => deleteEvent(index)}
                  className="text-xs text-red-500 mt-3"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isOpen && <EventCreate setIsOpen={setIsOpen} />}
    </div>
  );
}
