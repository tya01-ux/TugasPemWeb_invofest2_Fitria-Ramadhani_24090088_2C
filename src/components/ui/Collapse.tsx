import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CollapseProps {
  title: string;
  description: string;
}

export const Collapse: React.FC<CollapseProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-rose-200 border-r-4 border-r-rose-400 rounded-xl p-5 shadow-md hover:shadow-[0_10px_25px_rgba(244,63,94,0.3)] transition duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer w-full py-3 flex items-center gap-4 bg-white hover:bg-gray-50 transition-colors"
      >
        <div className="p-2 bg-gray-100 rounded-md">
          <ChevronDown
            size={20}
            className={`text-pink-950 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        <span className="text-lg font-semibold text-gray-800">{title}</span>
      </button>

      {isOpen && (
        <div className="pl-14 pr-4 py-3 bg-gray-50 border-t border-gray-200">
          <p className="text-base leading-relaxed text-gray-600">{description}</p>
        </div>
      )}
    </div>
  );
};
