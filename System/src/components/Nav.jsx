import React, { useState, useRef, useEffect } from "react";
import "../Styles/Navbar.scss";
import DateTime from "./DateTime";
import Battery from "./Doc/Battery";
import { Wifi, Search, Volume2, Sun, BluetoothConnected } from "lucide-react";

const menuData = {
  File: [
    { label: "New Window", shortcut: "⌘N" },
    { label: "New Tab", shortcut: "⌘T" },
    { divider: true },
    { label: "Open...", shortcut: "⌘O" },
    { label: "Open Recent", arrow: true },
    { divider: true },
    { label: "Close Window", shortcut: "⌘W" },
    { label: "Save", shortcut: "⌘S" },
    { label: "Save As...", shortcut: "⇧⌘S" },
  ],
  Edit: [
    { label: "Undo", shortcut: "⌘Z" },
    { label: "Redo", shortcut: "⇧⌘Z" },
    { divider: true },
    { label: "Cut", shortcut: "⌘X" },
    { label: "Copy", shortcut: "⌘C" },
    { label: "Paste", shortcut: "⌘V" },
    { label: "Select All", shortcut: "⌘A" },
  ],
  View: [
    { label: "as Icons", shortcut: "⌘1" },
    { label: "as List", shortcut: "⌘2" },
    { label: "as Columns", shortcut: "⌘3" },
    { divider: true },
    { label: "Show Toolbar", shortcut: "⌥⌘T" },
    { label: "Show Sidebar", shortcut: "⌥⌘S" },
    { label: "Show Preview", shortcut: "⇧⌘P" },
  ],
  Terminal: [
    { label: "New Terminal", shortcut: "⌃`" },
    { label: "Split Terminal", shortcut: "⌃⇧`" },
    { divider: true },
    { label: "Run Task...", shortcut: "" },
    { label: "Run Build Task", shortcut: "⇧⌘B" },
  ],
  Window: [
    { label: "Minimize", shortcut: "⌘M" },
    { label: "Zoom", shortcut: "" },
    { divider: true },
    { label: "Tile Window to Left", shortcut: "" },
    { label: "Tile Window to Right", shortcut: "" },
    { divider: true },
    { label: "Bring All to Front", shortcut: "" },
  ],
  Help: [
    { label: "Search", shortcut: "" },
    { divider: true },
    { label: "BharOS Help", shortcut: "" },
    { label: "About BharOS", shortcut: "" },
    { label: "System Preferences...", shortcut: "" },
  ],
};

const Nav = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuBarActive, setMenuBarActive] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
        setMenuBarActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
      setMenuBarActive(false);
    } else {
      setActiveMenu(menuName);
      setMenuBarActive(true);
    }
  };

  const handleMenuHover = (menuName) => {
    if (menuBarActive) {
      setActiveMenu(menuName);
    }
  };

  return (
    <div className="Nav" ref={navRef}>
      {/* Left side - Apple icon + Menu items */}
      <div className="left">
        <div className="apple-icon">
          <i className="fa-brands fa-apple"></i>
        </div>

        <div className="menu-items">
          {/* App name (bold) */}
          <div
            className={`menu-item app-name ${activeMenu === "Finder" ? "active" : ""}`}
            onClick={() => handleMenuClick("Finder")}
            onMouseEnter={() => handleMenuHover("Finder")}
          >
            Finder
            {activeMenu === "Finder" && (
              <div className="dropdown">
                <div className="dropdown-item">
                  <span>About BharOS</span>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item">
                  <span>System Preferences...</span>
                </div>
                <div className="dropdown-item">
                  <span>App Store...</span>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item">
                  <span>Force Quit...</span>
                  <span className="shortcut">⌥⌘⎋</span>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item">
                  <span>Sleep</span>
                </div>
                <div className="dropdown-item">
                  <span>Restart...</span>
                </div>
                <div className="dropdown-item">
                  <span>Shut Down...</span>
                </div>
              </div>
            )}
          </div>

          {/* Other menu items */}
          {Object.keys(menuData).map((menuName) => (
            <div
              key={menuName}
              className={`menu-item ${activeMenu === menuName ? "active" : ""}`}
              onClick={() => handleMenuClick(menuName)}
              onMouseEnter={() => handleMenuHover(menuName)}
            >
              {menuName}
              {activeMenu === menuName && (
                <div className="dropdown">
                  {menuData[menuName].map((item, idx) =>
                    item.divider ? (
                      <div key={idx} className="dropdown-divider"></div>
                    ) : (
                      <div key={idx} className="dropdown-item">
                        <span>{item.label}</span>
                        {item.shortcut && (
                          <span className="shortcut">{item.shortcut}</span>
                        )}
                        {item.arrow && <span className="arrow">▶</span>}
                      </div>
                    ),
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Status icons + DateTime */}
      <div className="right">
        <div className="status-icons">
          <div className="status-icon">
            <BluetoothConnected size={14} strokeWidth={2} />
          </div>
          <div className="status-icon">
            <Wifi size={14} strokeWidth={2} />
          </div>
          <div className="status-icon">
            <Volume2 size={14} strokeWidth={2} />
          </div>
          <div className="status-icon">
            <Sun size={14} strokeWidth={2} />
          </div>
          <Battery />
        </div>
        <DateTime />
      </div>
    </div>
  );
};

export default Nav;
