import React, { useState, useRef, useEffect } from "react";
import AppWindow from "../Doc/AppWindow";
import "../../Styles/Terminal.scss";

const Terminal = ({ onClose }) => {
  const [history, setHistory] = useState([
    { type: "system", text: "BharOS Terminal v1.0.0" },
    { type: "system", text: 'Type "help" for a list of commands.' }
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim();
      let response = "";
      
      switch (cmd.toLowerCase()) {
        case "help":
          response = "Available commands: help, clear, date, echo, whoami";
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        case "date":
          response = new Date().toString();
          break;
        case "whoami":
          response = "bharos_user";
          break;
        case "":
          break;
        default:
          if (cmd.startsWith("echo ")) {
            response = cmd.substring(5);
          } else {
            response = `Command not found: ${cmd}`;
          }
      }

      setHistory(prev => [
        ...prev, 
        { type: "user", text: `~ % ${cmd}` },
        ...(response ? [{ type: "output", text: response }] : [])
      ]);
      setInput("");
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <AppWindow title="Terminal — bash" onClose={onClose}>
      <div className="terminal-app" onClick={() => inputRef.current?.focus()}>
        <div className="term-content">
          {history.map((line, i) => (
            <div key={i} className={`term-line ${line.type}`}>
              {line.text}
            </div>
          ))}
          <div className="term-input-line">
            <span className="term-prompt">~ % </span>
            <input 
              ref={inputRef}
              type="text" 
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleCommand}
              autoComplete="off"
              spellCheck="false"
              autoFocus
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </AppWindow>
  );
};

export default Terminal;
