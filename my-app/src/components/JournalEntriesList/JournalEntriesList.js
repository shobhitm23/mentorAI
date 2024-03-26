// JournalEntriesList.js
import React from 'react';
import './JournalEntriesList.css';

function JournalEntriesList({ entries, deleteEntry }) {
  return (
    <ol>
      {entries.map((entry, index) => (
        <li key={index} className="entry">
          <div className="entry-content">
            <time className="entry-date">{entry.date}</time>
            <h3 className="entry-title">{entry.content}</h3>
            <p className="entry-description">{entry.content}</p>
          </div>
          <button className="delete" onClick={() => deleteEntry(index)}>Delete</button>
        </li>
      ))}
    </ol>
  );
}

export default JournalEntriesList;
