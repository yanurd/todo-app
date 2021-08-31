import deleteIcon from '../assets/img/icon-cross.svg'

const TodoItems = ({ data }) => {
  return (
    <section className="content-list">
      <ul>
        <li>
          <div className="content-list_todo">
            <h2>Complete online React Course</h2>
          </div>
          <div className="content-list_delete">
            <img src={deleteIcon} alt="Delete to-do" />
          </div>
        </li>
        <li>
          <div className="content-list_todo">
            <h2>Jog around the park</h2>
          </div>
          <div className="content-list_delete">
            <img src={deleteIcon} alt="Delete to-do" />
          </div>
        </li>
        <li>
          <div className="content-list_todo">
            <h2>10 minutes meditation</h2>
          </div>
          <div className="content-list_delete">
            <img src={deleteIcon} alt="Delete to-do" />
          </div>
        </li>
        <li>
          <div className="content-list_todo">
            <h2>Read for 1 hour</h2>
          </div>
          <div className="content-list_delete">
            <img src={deleteIcon} alt="Delete to-do" />
          </div>
        </li>
        <li>
          <div className="content-list_todo">
            <h2>Pick up grocieries</h2>
          </div>
          <div className="content-list_delete">
            <img src={deleteIcon} alt="Delete to-do" />
          </div>
        </li>
        <li>
          <div className="content-list_todo">
            <h2>Complete Todo App</h2>
          </div>
          <div className="content-list_delete">
            <img src={deleteIcon} alt="Delete to-do" />
          </div>
        </li>
        <li>
          <div className="content-list_left">
            <h2>5 items left</h2>
          </div>
          <div className="content-list_clear">
            <h2>
              <a href="/">Clear Completed</a>
            </h2>
          </div>
        </li>
      </ul>
    </section>
  );
};

export { TodoItems };
