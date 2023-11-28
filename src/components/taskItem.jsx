const TaskItem = ({ task, handleComplete, handleDelete }) => {
  return (
    <tr>
      <td
        className="task"
        style={{
          textDecoration: task.realizado
            ? "line-through wavy var(--primary-100)"
            : "none",
        }}
      >
        {task.nombre}
      </td>
      <td>
        <button className="table-button"
          disabled={task.realizado
            ? true
            : false} onClick={handleComplete}>
          <abbr title="Realizado">
            <i className="fa-regular fa-square-check"></i>
          </abbr>
        </button>
      </td>
      {/* <td>
        <button className="table-button">
          <abbr title="Editar"><i className="fa-solid fa-pen-to-square"></i></abbr>
        </button>
      </td> */}
      <td>
        <button className="table-button" onClick={handleDelete}>
          <abbr title="Eliminar">
            <i className="fa fa-trash"></i>
          </abbr>
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;
