import React from "react";
import { useState } from "react";

/*
  Responsible only for:
  - Handling input
  - Sending value to parent
*/

export default function TodoInput({ onAdd }) {

  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;

    onAdd(input);
    setInput("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        className="border p-2 flex-1 rounded"
        placeholder="Enter todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 rounded"
      >
        Add
      </button>
    </div>
  );
}