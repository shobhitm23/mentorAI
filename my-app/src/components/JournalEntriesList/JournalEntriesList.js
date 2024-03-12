/* eslint-disable jsx-a11y/anchor-is-valid */
// JournalEntriesList.js
import React from 'react';
import './JournalEntriesList.css';

function JournalEntriesList() {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      <li className="entry">
        <div className="bullet"></div>
        <time className="entry-date">February 2022</time>
        <h3 className="entry-title">Application UI code in Tailwind CSS</h3>
        <p className="entry-description">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
        <a href="#" className="entry-link">Learn more <span className="arrow">&#10230;</span></a>
      </li>
    </ol>
  );
}

export default JournalEntriesList;
