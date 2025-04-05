import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Si usas Tailwind o estilos globales
import { LocalStorageProvider } from './data/localStorageContext'; // Importación corregida

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocalStorageProvider>
      <App />
    </LocalStorageProvider>
  </React.StrictMode>
);