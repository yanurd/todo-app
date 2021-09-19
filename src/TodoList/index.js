

const TodoList = ({ children }) => {
  
  return (
    <section className="content-list">
      <ul>
        {children}
      </ul>
    </section>
  );
};

export { TodoList };
