import { useState } from "react";
import { useEventStore } from "../../../store/useEventStore";

export default function EventCreate({
  setIsOpen,
}: {
  setIsOpen: (v: boolean) => void;
}) {
  const addEvent = useEventStore((state) => state.addEvent);

  const [title, setTitle] = useState("");
  const [speaker, setSpeaker] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔥 validasi sederhana
    if (startTime >= endTime) {
      alert("Jam selesai harus lebih besar dari jam mulai");
      return;
    }

    addEvent({ title, speaker, date, startTime, endTime });

    // reset form (biar clean setelah submit)
    setTitle("");
    setSpeaker("");
    setDate("");
    setStartTime("");
    setEndTime("");

    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg">
        <h1 className="text-lg font-semibold mb-4">Tambah Event</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nama Event */}
          <input
            type="text"
            placeholder="Nama Event"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-200 focus:border-red-400 outline-none px-3 py-2 rounded-lg"
            required
          />

          {/* Pembicara */}
          <input
            type="text"
            placeholder="Pembicara"
            value={speaker}
            onChange={(e) => setSpeaker(e.target.value)}
            className="w-full border border-gray-200 focus:border-red-400 outline-none px-3 py-2 rounded-lg"
            required
          />

          {/* Tanggal */}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-200 focus:border-red-400 outline-none px-3 py-2 rounded-lg"
            required
          />

          {/* Jam */}
          <div className="grid grid-cols-2 gap-2">
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full border border-gray-200 focus:border-red-400 outline-none px-3 py-2 rounded-lg"
              required
            />

            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full border border-gray-200 focus:border-red-400 outline-none px-3 py-2 rounded-lg"
              required
            />
          </div>

          {/* BUTTON */}
          <div className="flex gap-2 pt-2">
            <button className="flex-1 bg-red-900 hover:bg-red-800 text-white py-2 rounded-lg transition">
              Simpan
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-gray-200 hover:bg-gray-300 py-2 rounded-lg transition"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
