import deleteIcon from "../assets/img/icon-cross.svg";

const TodoItems = ({ todo,completeTodo, deleteTodo }) => {
  const {text, completed} =todo
  return (
    <li>
      <div className={`content-list_todo ${completed && "completed"}`}>
        <label>
          <input onClick={() => completeTodo(text)} type="checkbox" />
          <span>{text}</span>
        </label>
      </div>
      <div className="content-list_delete">
        <img
          onClick={() => deleteTodo(text)}
          src={deleteIcon}
          alt="Delete to-do"
        />
      </div>
    </li>
  );
};

export { TodoItems };
