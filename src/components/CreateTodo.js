const CreateTodo = ({ className, type, id, placeholder }) => {
  return (
    <section className={className}>
      <input type={type} id={id} placeholder={placeholder} />
    </section>
  );
};

export { CreateTodo };
