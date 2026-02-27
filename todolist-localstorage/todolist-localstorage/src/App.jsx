import React from 'react'
import './App.css'


import { useLocalStorage } from "./hooks/useLocalStorage";
import TodoInput from './Components/TodoInput';
import SortButtons from './Components/SortButtons';
import TodoList from './Components/TodoList';

/*
  Main Component:
  - Holds todos state
  - Handles add/delete
  - Handles sorting
*/

export default function App() {

  const [todos, setTodos] = useLocalStorage("todos", []);

  // Add Todo
  const handleAdd = (newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
  };

  // Delete Todo
  const handleDelete = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  // Sort A → Z
  const handleSortAsc = () => {
    const sorted = todos.toSorted((a, b) =>
      a.localeCompare(b)
    );
    setTodos(sorted);
  };

  // Sort Z → A
  const handleSortDesc = () => {
    const sorted = todos.toSorted((a, b) =>
      b.localeCompare(a)
    );
    setTodos(sorted);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 w-96 rounded shadow">

        <h1 className="text-xl font-bold mb-4 text-center">
          Todo App
        </h1>

        < TodoInput onAdd={handleAdd} />
        <SortButtons
          onSortAsc={handleSortAsc}
          onSortDesc={handleSortDesc}
        />
        <TodoList todos={todos} onDelete={handleDelete} />

      </div>
    </div>
  );
}