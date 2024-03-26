import React from 'react';
import JournalEntryPage from './components/JournalEntryPage/JournalEntryPage.js';
import './App.css'
import HomePage from './components/HomePage/HomePage.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js';

function App() {
  return (
    <div className='app'>
      <h1 className='app-title'>journal</h1>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/journal' element={<JournalEntryPage />} />
          </Routes>
        </Router>      
    </div>  
  );
}

export default App;