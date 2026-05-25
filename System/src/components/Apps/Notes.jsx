import React, { useState } from "react";
import AppWindow from "../Doc/AppWindow";
import "../../Styles/Notes.scss";

const Notes = ({ onClose }) => {
  const [text, setText] = useState("");

  return (
    <AppWindow title="Notes — Untitled.txt" onClose={onClose}>
      <div className="notes-app">
        <div className="notes-header">
          <span className="notes-filename">Untitled.txt</span>
          <span className="notes-status">
            {text.length} characters
          </span>
        </div>
        <textarea
          className="notes-editor"
          placeholder="Start typing…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          spellCheck={false}
        />
      </div>
    </AppWindow>
  );
};

export default Notes;
