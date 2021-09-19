const TodoCounter = ({ uncompletedTodos }) => {
  return (
    <li>
      <div className="content-list_left">
        <h2>{uncompletedTodos} items left</h2>
      </div>
      <div className="content-list_clear">
        <h2>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
          <a href="#">Clear Completed</a>
        </h2>
      </div>
    </li>
  );
};

export { TodoCounter };
