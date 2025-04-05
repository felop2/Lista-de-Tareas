import React, { createContext, useState } from 'react';
import tasksData from '../data/tasks.json';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(tasksData);

  // Función para agregar una nueva tarea
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const markAsComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, complete: true } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, markAsComplete }}>
      {children}
    </TaskContext.Provider>
  );
};