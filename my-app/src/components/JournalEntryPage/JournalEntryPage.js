import React, { useState } from 'react';
import './JournalEntryPage.css';
import JournalEntriesList from '../JournalEntriesList/JournalEntriesList.js';
import JournalEntryForm from '../JournalEntry/JournalEntryForm.js';
import JournalCard from '../JournalCard/JournalCard.js';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme.js';

function JournalEntryPage() {
  const [entryContent, setEntryContent] = useState('');
  const [entries, setEntries] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };

    const formattedDate = new Date().toLocaleDateString('en-US', options);

    const newEntry = {
      title: "New Entry",
      content: entryContent,
      date: formattedDate,
    };

    setEntries([...entries, newEntry]);
    setEntryContent('');
  }

  function deleteEntry(index) {
    const newEntries = [...entries];
    newEntries.splice(index, 1);
    setEntries(newEntries);
  };

  return (
    <div className="journal-entry-form">
      <JournalEntryForm handleSubmit={handleSubmit} entryContent={entryContent} setEntryContent={setEntryContent} />
      <JournalEntriesList entries={entries} deleteEntry={deleteEntry}/>

      <ThemeProvider theme={theme}>
        <JournalCard entries={entries} deleteEntry={deleteEntry}/>
      </ThemeProvider>
    </div>
  );
}

export default JournalEntryPage;