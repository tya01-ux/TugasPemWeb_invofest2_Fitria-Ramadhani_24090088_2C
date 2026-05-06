import { useEventStore } from "../../store/useEventStore";
import { useCategoryStore } from "../../store/useCategoryStore";
import { useSpeakerStore } from "../../store/useSpeakerStore";

export default function DashboardIndex() {
  const events = useEventStore((state) => state.events);
  const categories = useCategoryStore((state) => state.categories);
  const speakers = useSpeakerStore((state) => state.speakers);

  return (
    <div>
      <h1 className="text-2xl font-bold text-red-900 mb-2">
        Dashboard
      </h1>

      <p className="text-gray-500 mb-6">
        Selamat datang di dashboard
      </p>

      {/* CARD */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-[#FDECEC] p-4 rounded-xl border border-red-200">
          <p className="text-sm text-gray-500">Total Event</p>
          <h2 className="text-2xl font-bold text-red-900">
            {events.length}
          </h2>
        </div>

        <div className="bg-[#FDECEC] p-4 rounded-xl border border-red-200">
          <p className="text-sm text-gray-500">Category</p>
          <h2 className="text-2xl font-bold text-red-900">
            {categories.length}
          </h2>
        </div>

        <div className="bg-[#FDECEC] p-4 rounded-xl border border-red-200">
          <p className="text-sm text-gray-500">Pembicara</p>
          <h2 className="text-2xl font-bold text-red-900">
            {speakers.length}
          </h2>
        </div>

      </div>
    </div>
  );
}