/*
  Two buttons:
  - A → Z
  - Z → A
*/
import React from "react";
export default function SortButtons({ onSortAsc, onSortDesc }) {

  return (
    <div className="flex gap-3 mb-4">
      <button
        onClick={onSortAsc}
        className="bg-green-500 text-white px-3 py-1 rounded"
      >
        A → Z
      </button>

      <button
        onClick={onSortDesc}
        className="bg-purple-500 text-white px-3 py-1 rounded"
      >
        Z → A
      </button>
    </div>
  );
}