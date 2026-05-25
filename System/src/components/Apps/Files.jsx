import React from "react";
import AppWindow from "../Doc/AppWindow";
import {
  FcDocument,
  FcImageFile,
  FcFolder,
  FcMusic,
} from "react-icons/fc";
import "../../Styles/Files.scss";

const FAKE_FILES = [
  { id: 1, name: "notes.txt", Icon: FcDocument },
  { id: 2, name: "image.png", Icon: FcImageFile },
  { id: 3, name: "project-folder", Icon: FcFolder },
  { id: 4, name: "music.mp3", Icon: FcMusic },
  { id: 5, name: "readme.md", Icon: FcDocument },
  { id: 6, name: "photos", Icon: FcFolder },
];

const SIDEBAR_ITEMS = [
  { label: "Recents", emoji: "🕐" },
  { label: "Desktop", emoji: "🖥️" },
  { label: "Documents", emoji: "📄" },
  { label: "Downloads", emoji: "⬇️" },
];

const Files = ({ onClose }) => {
  return (
    <AppWindow title="Files" onClose={onClose}>
      <div className="files-app">
        {/* Toolbar */}
        <div className="files-toolbar">
          <div className="toolbar-nav">
            <button className="toolbar-btn" disabled>◀</button>
            <button className="toolbar-btn" disabled>▶</button>
          </div>
          <span className="toolbar-path">~/Desktop</span>
        </div>

        <div className="files-content">
          {/* Sidebar */}
          <aside className="files-sidebar">
            <p className="sidebar-heading">Favorites</p>
            {SIDEBAR_ITEMS.map((item) => (
              <div className="sidebar-item" key={item.label}>
                <span className="sidebar-emoji">{item.emoji}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </aside>

          {/* File grid */}
          <main className="files-grid">
            {FAKE_FILES.map((file) => (
              <div className="file-card" key={file.id}>
                <file.Icon size={36} />
                <span className="file-name">{file.name}</span>
              </div>
            ))}
          </main>
        </div>
      </div>
    </AppWindow>
  );
};

export default Files;
