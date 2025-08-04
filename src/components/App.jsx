import React, { useState } from "react";
import InputArea from "./InputArea";
import StickyNotes from "./StickyNotes";
import ThemeToggle from "./ThemeToggle";
import FilterBar from "./FilterBar";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [completedNotes, setCompletedNotes] = useState([]);
  const [filter, setFilter] = useState("all");

  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text,
      completed: false,
    };
    setNotes([newNote, ...notes]);
  };

  const toggleComplete = (id) => {
    setNotes((prevNotes) => {
      const updated = prevNotes.map((note) =>
        note.id === id ? { ...note, completed: true } : note
      );
      const completed = updated.find((note) => note.id === id);
      if (completed) {
        setCompletedNotes((prev) => [completed, ...prev]);
      }
      return updated.filter((note) => note.id !== id);
    });
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    setCompletedNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const filteredNotes = (() => {
    if (filter === "active") return notes;
    if (filter === "completed") return completedNotes;
    return [...notes, ...completedNotes];
  })();

  return (
    <div className="app-container">
      {/* Header layout */}
      <div className="app-header">
        <div className="header-top">
          <ThemeToggle />
        </div>
        <h1 className="app-title">TASKLEEF</h1>
      </div>

      {/* Input area */}
      <InputArea addNote={addNote} />

      {/* Filters */}
      <FilterBar currentFilter={filter} setFilter={setFilter} />

      {/* Notes */}
      <StickyNotes
        notes={filteredNotes}
        onToggleComplete={toggleComplete}
        onDelete={deleteNote}
        currentFilter={filter}
      />
    </div>
  );
};

export default App;
