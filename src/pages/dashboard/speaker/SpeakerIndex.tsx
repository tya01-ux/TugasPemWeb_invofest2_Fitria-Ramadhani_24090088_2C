import { useState } from "react";
import { useSpeakerStore } from "../../../store/useSpeakerStore";
import SpeakerCreate from "./SpeakerCreate";

export default function SpeakerIndex() {
  const [isOpen, setIsOpen] = useState(false);

  const speakers = useSpeakerStore((state) => state.speakers);
  const deleteSpeaker = useSpeakerStore((state) => state.deleteSpeaker);

  return (
    <div className="relative">
      <div className={isOpen ? "blur-sm pointer-events-none" : ""}>
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-xl font-semibold text-gray-800">Speaker</h1>
              <p className="text-sm text-gray-500">
                Kelola pembicara event kamu
              </p>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition"
            >
              + Tambah
            </button>
          </div>

          {/* LIST */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {speakers.length === 0 && (
              <p className="col-span-full text-center text-sm text-gray-400">
                Belum ada speaker
              </p>
            )}

            {speakers.map((item, index) => (
              <div
                key={index}
                  className="
                  bg-white
                  border border-rose-200 border-r-4 border-r-rose-400
                  rounded-xl p-5 text-center
                  shadow-md
                  hover:shadow-[0_10px_25px_rgba(244,63,94,0.3)]
                  transition duration-300
                "
              >
                {/* FOTO */}
                <img
                  src={item.photo || "https://i.pravatar.cc/150"}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-rose-300 mb-3"
                />

                {/* NAMA */}
                <h3 className="text-sm font-semibold text-gray-800">
                  {item.name}
                </h3>

                {/* ROLE */}
                <p className="text-xs text-gray-500 mt-1">{item.role}</p>

                {/* DELETE */}
                <button
                  onClick={() => deleteSpeaker(index)}
                  className="text-xs text-rose-500 hover:text-rose-700 mt-3"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isOpen && <SpeakerCreate setIsOpen={setIsOpen} />}
    </div>
  );
}
