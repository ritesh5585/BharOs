import React, { useState, useCallback } from "react";
import DesktopIcon from "./DesktopIcon.jsx";
import { icons } from "../../utils/Icon.js";
import "../../Styles/desktop.scss";

const MAX_SCALE = 1.5;
const NEIGHBOR_RANGE = 2;

const Desktop = ({ openWindow }) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const getScale = useCallback(
    (index) => {
      if (hoveredIndex === -1) return 1;
      const distance = Math.abs(index - hoveredIndex);
      if (distance > NEIGHBOR_RANGE) return 1;

      const scale = MAX_SCALE - distance * 0.2;
      return Math.max(scale, 1);
    },
    [hoveredIndex],
  );

  return (
    <div className="dock" onMouseLeave={() => setHoveredIndex(-1)}>
      <div className="dock-bar">
        {icons.map((item, index) => (
          <DesktopIcon
            key={item.id}
            Icon={item.Icon}
            name={item.name}
            color={item.color}
            scale={getScale(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            // onMouseLeave={() => {}}
            onClick={() => openWindow && openWindow(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Desktop;
