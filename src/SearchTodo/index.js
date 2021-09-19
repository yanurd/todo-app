import { useContext } from "react";
import { TodoContext } from "../TodoContext";

const SearchTodo = () => {

  const { searchValue, onSearchValueChange } = useContext(TodoContext);
  return (
    <section className="content-new">
      <input
        value={searchValue}
        placeholder="Create a new todo..."
        onChange={onSearchValueChange}
      />
    </section>
  );
};

export { SearchTodo };
