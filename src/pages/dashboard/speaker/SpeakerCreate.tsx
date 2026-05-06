import { useState } from "react";
import { useSpeakerStore } from "../../../store/useSpeakerStore";

export default function SpeakerCreate({
  setIsOpen,
}: {
  setIsOpen: (val: boolean) => void;
}) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [photo, setPhoto] = useState("");

  const addSpeaker = useSpeakerStore((state) => state.addSpeaker);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addSpeaker({ name, role, photo });
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl">
        <h1 className="text-lg font-semibold mb-4">Tambah Speaker</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
            required
          />

          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
            required
          />

          <input
            type="text"
            placeholder="Link Foto (URL)"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
            required
          />

          <div className="flex gap-2">
            <button className="flex-1 bg-red-900 text-white py-2 rounded-lg">
              Simpan
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-gray-200 py-2 rounded-lg"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
