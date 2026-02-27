import { useState, useEffect } from "react";

/*
  Custom hook to sync state with localStorage
  Purpose:
  - Persist todos even after refresh
  - Reusable logic
*/

export function useLocalStorage(key, initialValue) {

  // Initialize from localStorage
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  // Update localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}