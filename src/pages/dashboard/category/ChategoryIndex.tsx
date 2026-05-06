import { useState } from "react";
import CategoryCreate from "./CategoryCreate";
import { useCategoryStore } from "../../../store/useCategoryStore";

export default function CategoryIndex() {
  const [isOpen, setIsOpen] = useState(false);

  // store
  const categories = useCategoryStore((state) => state.categories);
  const deleteCategory = useCategoryStore((state) => state.deleteCategory);

  const handleDelete = (index: number) => {
    const confirmDelete = confirm("Yakin mau hapus category?");
    if (!confirmDelete) return;

    deleteCategory(index); 
  };

  return (
    <div className="relative">
      <div className={isOpen ? "blur-sm pointer-events-none" : ""}>
        <div className="bg-white p-6 rounded-2xl shadow-sm">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                Category
              </h1>
              <p className="text-sm text-gray-500">
                Kelola kategori event kamu
              </p>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="px-4 py-2 text-sm bg-red-900 text-white rounded-lg"
            >
              + Tambah
            </button>
          </div>

          {/* LIST */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((item, index) => (
              <div
                key={index}
                className="bg-[#FDECEC] p-5 rounded-2xl border border-red-100"
              >
                <div className="flex justify-between items-center">

                  <h3 className="text-base font-semibold text-red-900">
                    {item.name}
                  </h3>

                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 text-xs"
                  >
                    Hapus
                  </button>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* MODAL */}
      {isOpen && <CategoryCreate setIsOpen={setIsOpen} />}
    </div>
  );
}