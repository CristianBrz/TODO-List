
const TaskForm = () => {
  return (
    <form action="">
      <label hidden htmlFor="nueva-tarea">
        Agregar una tarea a la lista
      </label>
      <input
        type="text"
        id="nueva-tarea"
        name="nueva-tarea"
        value=""
        placeholder="Nueva tarea"
        autoFocus
        required
      />
      <button className="add-button" type="submit">
        <i className="fa fa-plus-square"></i>
      </button>
    </form>
  );
};

export default TaskForm;
