const FilterTodo = () => {
  return (
    <section className="content-options">
      <a className="content-options_all" href="/">
        All
      </a>
      <a className="content-options_active" href="/">
        Active
      </a>
      <a className="content-options_completed" href="/">
        Completed
      </a>
    </section>
  );
};

export { FilterTodo };
