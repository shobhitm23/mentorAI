import React from 'react';
import JournalEntryForm from './components/JournalEntryForm/JournalEntryForm.js';
import './App.css'

function App() {
  return (
    <div className='app'>
      <h1 className='app-title'>My Journal App</h1>
      <JournalEntryForm />
    </div>  
  );
}

export default App;
