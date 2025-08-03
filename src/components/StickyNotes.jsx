import React from "react";
import ToDoItem from "./ToDoItem";

const StickyNotes = ({ notes, onToggleComplete, onDelete, currentFilter }) => {
  const filteredNotes = notes.filter((note) => {
    if (currentFilter === "active") return !note.completed;
    if (currentFilter === "completed") return note.completed;
    return true;
  });

  return (
    <div className="notes-container">
      {filteredNotes.length === 0 ? (
        <p className="no-tasks-msg">No tasks to show</p>
      ) : (
        filteredNotes.map((note) => (
          <ToDoItem
            key={note.id}
            note={note}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
            currentFilter={currentFilter}
          />
        ))
      )}
    </div>
  );
};

export default StickyNotes;
