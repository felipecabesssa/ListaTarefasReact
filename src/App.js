import React, { useState } from 'react';

import './App.css';

const App = () => {
  // let message = "Hello REACT";
  const [message, setMessage] = useState('Hello World')

  return (
    <>
      <div className="container">{message}</div>
      <button onClick={() => setMessage("Ja falou já!")}>
        mudar mensagem
      </button>
    </>
  )
};

export default App;
