import React from 'react';
import './App.css';
import OMDBQueryForm from './components/OMDBQueryForm'

function App() {
  console.log(process.env);
  return (
    <div className="App">
      <header className="App-header">
        <OMDBQueryForm />
      </header>
    </div>
  );
}

export default App;
