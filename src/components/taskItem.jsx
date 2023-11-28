const TaskItem = ({ task, handleComplete, handleDelete }) => {
  return (
    <tr>
      <td
        className="task"
        style={{
          textDecoration: task.realizado ? "line-through wavy var(--primary-100)" : "none",
        }}
      >
        {task.nombre}
      </td>
      <td>
        <button className="table-button" onClick={handleComplete}>
          <i className="fa-regular fa-square-check"></i>
        </button>
      </td>
      {/* <td>
        <button className="table-button">
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </td> */}
      <td>
        <button className="table-button" onClick={handleDelete}>
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;
