import React, { useState } from "react";

const InputArea = ({ addNote }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    addNote(input.trim());
    setInput("");
  };

  return (
    <div className="input-area">
      <textarea
        className="note-input"
        rows="3"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write your sticky note..."
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleAdd();
          }
        }}
      />
      <button className="add-btn" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default InputArea;
