// JournalEntryForm.js
import React, { useState } from 'react';
import './JournalEntryForm.css';
import JournalEntriesList from '../JournalEntriesList/JournalEntriesList.js';

function JournalEntryForm() {
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
      
      <div className="editor-container">
        <label for="editor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
        <br />
        <textarea
          id="editor"
          rows="8"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
          value={entryContent}
          onChange={(e) => setEntryContent(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        className="publish-button"
      >
        Publish post
      </button>

      {entries.length > 0 && (
        <div>
          <h2>Entries</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Content</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>  
      )}

      <JournalEntriesList />
    </div>
  );
}

export default JournalEntryForm;