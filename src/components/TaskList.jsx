import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = ({ completed }) => {
  const { tasks } = useContext(TaskContext);

  // Filtra las tareas según el estado (pendientes o completadas)
  const filteredTasks = tasks.filter((task) => task.complete === completed);

  return (
    <div className="p-4 grid grid-cols-1 gap-4">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;