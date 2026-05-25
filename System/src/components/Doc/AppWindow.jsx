import React, { useState } from "react";
import { Rnd } from "react-rnd";
import "../../Styles/AppWindow.scss";

const AppWindow = ({ title, onClose, children }) => {
  const [size, setSize] = useState({ width: 600, height: 420 });
  const [position, setPosition] = useState({ x: 120, y: 60 });

  return (
    <Rnd
      className="app-window"
      size={size}
      position={position}
      onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
      onResizeStop={(e, dir, ref, delta, pos) => {
        setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
        setPosition(pos);
      }}
      minWidth={360}
      minHeight={260}
      dragHandleClassName="app-window-titlebar"
    >
      {/* Titlebar */}
      <div className="app-window-titlebar">
        <div className="titlebar-controls">
          <button className="ctrl-btn close" onClick={onClose} />
          <button className="ctrl-btn minimize" />
          <button className="ctrl-btn maximize" />
        </div>
        <span className="titlebar-title">{title}</span>
        <div className="titlebar-spacer" />
      </div>

      {/* Body */}
      <div className="app-window-body">
        {children}
      </div>
    </Rnd>
  );
};

export default AppWindow;
