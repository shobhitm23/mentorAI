// JournalEntryForm.js
import React, { useState } from 'react';
import './JournalEntryPage.css';
import JournalEntriesList from '../JournalEntriesList/JournalEntriesList.js';
import JournalEntryForm from '../JournalEntry/JournalEntryForm.js';

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
      content: entryContent,
      date: formattedDate,
    };

    setEntries([...entries, newEntry]);
    setEntryContent('');
  }

  return (
    <div className="journal-entry-form">
      <JournalEntryForm />
      <JournalEntriesList />
    </div>
  );
}

export default JournalEntryPage;