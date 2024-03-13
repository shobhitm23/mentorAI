import React from 'react';
import JournalEntryPage from './components/JournalEntryPage/JournalEntryPage.js';
import './App.css'

function App() {
  return (
    <div className='app'>
      <h1 className='app-title'>My Journal App</h1>
      <JournalEntryPage />
    </div>  
  );
}

export default App;