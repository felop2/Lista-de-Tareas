import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';

const TaskProvider = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Simula la carga de datos desde un archivo JSON
    import('../tasks.json').then((data) => setTasks(data.default));
  }, []);

  return <TaskList tasks={tasks} />;
};

export default TaskProvider;