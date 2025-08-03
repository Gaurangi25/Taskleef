import React from "react";

const ToDoItem = ({ note, onToggleComplete, onDelete, currentFilter }) => {
  return (
    <div className="note-card">
      <p className="note-text">{note.text}</p>
      <div className="note-actions">
        {!note.completed && (
          <button
            className="complete-btn"
            onClick={() => onToggleComplete(note.id)}
          >
            Mark Done
          </button>
        )}
        <button className="delete-btn" onClick={() => onDelete(note.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
