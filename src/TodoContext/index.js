import { createContext, useState } from "react";

// Imports
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = createContext();

const TodoProvider = (props) => {
  const LOCAL_STORAGE = "TODO_V1";

  /* As useLocalStorage is a custom hook that returns more than 2 elements,
i need to access such hook using curly brackets AND -if needed- rename
elements so they'd fit my code */
  const {
    item: todos,
    updateLocalStorage: setTodos,
    loading,
    error,
  } = useLocalStorage(LOCAL_STORAGE, []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const uncompletedTodos = todos.filter((todo) => !todo.completed).length;

  const saveTodo = (event) => {
    event.preventDefault();
    const newTodos = [...todos];
    newTodos.push({
      text: event.target.value,
      confirmed: false,
    });
    setTodos(newTodos);
  };
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        searchValue,
        setSearchValue,
        uncompletedTodos,
        searchedTodos,
        saveTodo,
        completeTodo,
        deleteTodo,
        onSearchValueChange,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
