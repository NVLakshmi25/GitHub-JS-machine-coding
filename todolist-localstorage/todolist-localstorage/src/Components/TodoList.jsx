/*
  Displays todos
  Handles delete
*/
import React from "react";
export default function TodoList({ todos, onDelete }) {

  return (
    <ul className="space-y-2">
      {todos.map((todo, index) => (
        <li
          key={index}
          className="flex justify-between items-center border p-2 rounded"
        >
          <span>{todo}</span>

          <button
            onClick={() => onDelete(index)}
            className="text-red-500"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}