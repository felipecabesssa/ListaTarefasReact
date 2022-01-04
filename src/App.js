import React, { useState } from 'react';

import Tasks from './components/Tasks';
import "./App.css"

const App = () => {
  // let message = "Hello REACT";
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: true
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true
    }
  ]);

  return (
    <>
      <div className="container">
        <Tasks tasks={tasks}/>
      </div>
      
    </>
  );
};

export default App;
