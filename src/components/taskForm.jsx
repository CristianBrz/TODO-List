import { useState } from "react";

const TaskForm = ({ addTask }) => {
  
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(taskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label hidden htmlFor="new-task">
        Agregar una tarea a la lista
      </label>
      <input
        type="text"
        id="new-task"
        name="new-task"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
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
