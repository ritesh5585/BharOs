import React from "react";

const DesktopIcon = ({
  Icon,
  name,
  color,
  scale = 1,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className="icon-wrapper"
      style={{ transform: `scale(${scale})` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="icon-bg">
        <Icon size={42} color={color} />
      </div>
      <p className="icon-label">{name}</p>
    </div>
  );
};

export default DesktopIcon;
