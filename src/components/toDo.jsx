import { useState } from "react";
// import tareas from "../data.js";

import TaskForm from "./taskForm";
import TaskList from "./taskList";

// console.log(DATA);

const ToDo = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = {
      id: tasks.length + 1,
      nombre: taskName,
      realizado: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        // task.id === taskId ? task.realizado = true : ""
        // task.id === taskId ? {...task, realizado: true} : ""
        task.id === taskId ? {...task, realizado: true} : task
      )
    );
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <main>
      <h1>Lista de tareas</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </main>
  );
};

export default ToDo;
