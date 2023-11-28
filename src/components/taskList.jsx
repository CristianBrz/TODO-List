import TaskItem from "./taskItem";

const TaskList = ({ tasks, handleComplete, handleDelete }) => {
  // console.log(tasks);
  return (
    <table>
      <thead>
        <tr className="table-header">
          <th colSpan="4">Tareas pendientes</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleComplete={() => handleComplete(task.id)}
            handleDelete={() => handleDelete(task.id)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
