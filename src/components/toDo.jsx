import TaskForm from "./taskForm";
import TaskList from "./taskList";

const ToDo = () => {
  return (
    <>
      <h1>Lista de tareas</h1>
      <TaskForm/>
      <TaskList/>
    </>
  );
};

export default ToDo;
