import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask.jsx';

const App = () => {
  return (
    <TaskProvider>
       <div className="App bg-gray-100 min-h-screen p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Lista de Pendientes</h1>
        <div className="mb-6">
          <AddTask />
        </div>
        <div className="flex gap-6">
          {/* Lista de tareas pendientes */}
          <div className="w-1/2">
            <h2 className="text-xl font-semibold mb-4">Pendientes</h2>
            <TaskList completed={false} />
          </div>
          {/* Lista de tareas completadas */}
          <div className="w-1/2">
            <h2 className="text-xl font-semibold mb-4">Completadas</h2>
            <TaskList completed={true} />
          </div>
        </div>
      </div>
    </TaskProvider>
  );
};

export default App;