const TaskItem = () => {
  return (
    <tr>
      <td className="task">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, harum!</td>
      <td>
        <button className="table-button">
          <i className="fa-regular fa-square-check"></i>
        </button>
      </td>
      <td>
        <button className="table-button">
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </td>
      <td>
        <button className="table-button">
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;
