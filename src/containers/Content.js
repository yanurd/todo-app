import { CreateTodo } from "../components/CreateTodo";
import { TodoItems } from "../components/TodoItems";
import { FilterTodo } from "../components/FilterTodo";

const Content = ({ data }) => {
  return (
    <main className="content">
      <CreateTodo
        className="content-new"
        type="text"
        id="new-todo"
        placeholder="Create a new todo..."
      />
      {data.length > 0 && <TodoItems data={data} />}
      {data.length > 0 && <FilterTodo />}
    </main>
  );
};

export { Content };
