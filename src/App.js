import React from 'react';
import './App.css';
import OMDBQueryForm from './components/OMDBQueryForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Movie App</h1>
        <OMDBQueryForm />
      </header>
    </div>
  );
}

export default App;
