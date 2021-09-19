import { useState, useEffect } from "react";
const useLocalStorage = (itemName, initialValue) => {
  // State uses the initial value(an empty array in this case)
  // when it first runs after function being called
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        let parsedTodos;
        const localStorageTodos = localStorage.getItem(itemName);
        if (!localStorageTodos) {
          //Create an empty array in Local Storage
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedTodos = initialValue;
        } else {
          parsedTodos = JSON.parse(localStorageTodos);
        }
        setItem(parsedTodos);
        console.log("pasé")
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }, 1500);
  }, []);

  const updateLocalStorage = (newTodo) => {
    try {
      const todo = JSON.stringify(newTodo);
      localStorage.setItem(itemName, todo);
      setItem(newTodo);
    } catch (error) {
      setError(true);
    }
  };

  /* When a custom hook returns more than 2 elements
  they must be wrapped in curly brackets instead of square brackets */
  return {
    item,
    updateLocalStorage,
    loading,
    error,
  };
};

export { useLocalStorage };
