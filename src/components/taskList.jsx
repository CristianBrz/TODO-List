import TaskItem from "./taskItem"

const TaskList = () => {
  return (
    <table>
    <thead>
      <tr className="table-header">
        <th colSpan="4">Tareas pendientes</th>
      </tr>
    </thead>
    <tbody>
      <TaskItem/>
      <TaskItem/>
      <TaskItem/>
      <TaskItem/>
      <TaskItem/>
    </tbody>
  </table>
  )
}

export default TaskList 