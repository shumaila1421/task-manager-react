import { createContext, useState } from "react";

export const TaskContext = createContext();

function TaskStore({ children }) {
  const { tasks, setTasks } = useState([]);

  function addTask(task) {
    let newTask = {
      id: Math.floor(Math.random() * 1000),
      ...task,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskStore;
