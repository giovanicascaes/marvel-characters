import { useState, useEffect } from "react";

let savedValue = null;

export default function useMemoryState(initialState) {
  const [value, setValue] = useState(savedValue ?? initialState);

  useEffect(() => {
    savedValue = value;
  }, [value]);

  return [value, setValue];
}
