import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' || description.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const newTask = {
      id: Date.now(), // Genera un ID único basado en la fecha actual
      title,
      description,
      complete: false, // Las nuevas tareas son incompletas por defecto
    };

    addTask(newTask); // Añade la nueva tarea al estado global
    setTitle(''); // Limpia el campo de título
    setDescription(''); // Limpia el campo de descripción
  };

  return (
    <div className="bg-white shadow-md rounded p-4 border border-gray-200">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Añadir Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Título
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Escribe el título de la tarea"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Descripción
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Escribe la descripción de la tarea"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600"
        >
          Añadir Tarea
        </button>
      </form>
    </div>
  );
};

export default AddTask;