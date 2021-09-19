import { Header } from "../Header";
import { SearchTodo } from "../SearchTodo";
import { TodoList } from "../TodoList";
import { TodoItems } from "../TodoItems";
import { Footer } from "../Footer";
import { FilterTodo } from "../FilterTodo";
import {TodoCounter} from '../TodoCounter'
import { TodoContext } from "../TodoContext";

import { useContext } from "react";
const AppUi = () => {
  const {
    searchedTodos,
    uncompletedTodos,
    completeTodo,
    deleteTodo
  } = useContext(TodoContext);
  return (
    <>
      <Header />
      <main className="content">
        <SearchTodo />
        <TodoList >
          {searchedTodos.map((todo) => (
            <TodoItems
              key={todo.text}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
              todo={todo}
            />
          ))}
          <TodoCounter uncompletedTodos={uncompletedTodos}/>
        </TodoList>
        <FilterTodo/>
      </main>
      <Footer />
    </>
  );
};

export { AppUi };
