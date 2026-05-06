import { useState } from "react";
import { useCategoryStore } from "../../../store/useCategoryStore";

export default function CategoryCreate({
  setIsOpen,
}: {
  setIsOpen: (val: boolean) => void;
}) {
  const [name, setName] = useState("");

  const addCategory = useCategoryStore((state) => state.addCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addCategory({ name }); // 🔥 langsung ke store
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl">

        <h1 className="text-lg font-semibold mb-4">
          Tambah Category
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
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