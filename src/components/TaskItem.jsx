import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { markAsComplete } = useContext(TaskContext);

  return (
    <div className="bg-white shadow-md rounded p-4 border border-gray-200">
      <h2 className="text-lg font-bold text-gray-800">{task.title}</h2>
      <p className="text-gray-600">{task.description}</p>
      <span
        className={`inline-block mt-2 px-3 py-1 text-sm font-semibold rounded ${
          task.complete ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}
      >
        {task.complete ? 'Completado' : 'Pendiente'}
      </span>
      {!task.complete && (
        <button
          onClick={() => markAsComplete(task.id)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600"
        >
          Marcar como completado
        </button>
      )}
    </div>
  );
};

export default TaskItem;