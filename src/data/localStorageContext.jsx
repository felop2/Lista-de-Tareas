import React, { createContext } from 'react';

const LocalStorageContext = createContext();

const LocalStorageProvider = ({ children }) => {
  const LSKey = 'todos_app';

  const addWithKey = (obj) => {
    const existing = JSON.parse(localStorage.getItem(LSKey)) || [];
    localStorage.setItem(LSKey, JSON.stringify([...existing, obj]));
  };

  const getAllWithKey = () => {
    return JSON.parse(localStorage.getItem(LSKey)) || [];
  };

  return (
    <LocalStorageContext.Provider value={{ addWithKey, getAllWithKey }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

export { LocalStorageContext, LocalStorageProvider }; // Exportación nombrada