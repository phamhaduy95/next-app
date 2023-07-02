import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string
): [T | undefined, (value: T) => void] {
  const [value, setValue] = useState<T>();

  function setItem(newValue: T) {
    if (newValue === undefined) return;
    const token = JSON.stringify(newValue);
    localStorage.setItem(key, token);
    setValue(newValue);
  }
  
  useEffect(() => {
    const token = localStorage.getItem(key);
    if (token === null) return;
    const value = JSON.parse(token);
    setValue(value);
  }, [key]);
  return [value, setItem];
}
