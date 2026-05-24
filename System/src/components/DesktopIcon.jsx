import React from "react";

const DesktopIcon = ({ Icon, name, color }) => {
  return (
    <div className="icon-wrapper">
      <Icon size={50} color={color} />
      <p>{name}</p>
    </div>
  );
};

export default DesktopIcon;

