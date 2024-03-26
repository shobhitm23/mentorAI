import React from 'react';
import './JournalEntryForm.css';

function JournalEntryForm({ handleSubmit, entryContent, setEntryContent}) {
  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <div className="entry-container">
        <div className="entry-header">
          <textarea
            id="comment"
            rows="4"
            className="entry-textarea"
            placeholder="Write a comment..."
            value={entryContent}
            onChange={ event => setEntryContent(event.target.value) }
            required
          />
        </div>
        <div className="entry-footer">
          <button
            type="submit"
            className="publish-button">
            Publish post
          </button>

          <div className="entry-buttons">
            <button type="button" className="attachment-button">
              {/* Add your attachment icon here */}
              <span className="sr-only">Attach file</span>
            </button>
            {/* Add other buttons as needed */}
          </div>
        </div>
      </div>
    </form>
  );
}

export default JournalEntryForm;
