import React, { useState, useEffect } from "react";
import "../../Styles/Navbar.scss";
import { FaBatteryFull, FaBatteryHalf, FaBatteryQuarter, FaBatteryEmpty, FaBolt } from "react-icons/fa";

const Battery = () => {
  const [level, setLevel] = useState(100);
  const [charging, setCharging] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    let batteryManager = null;

    const updateBatteryInfo = () => {
      if (batteryManager) {
        setLevel(Math.round(batteryManager.level * 100));
        setCharging(batteryManager.charging);
      }
    };

    if ("getBattery" in navigator) {
      navigator.getBattery().then((battery) => {
        batteryManager = battery;
        updateBatteryInfo();

        battery.addEventListener("levelchange", updateBatteryInfo);
        battery.addEventListener("chargingchange", updateBatteryInfo);
      });
    } else {
      setIsSupported(false);
    }

    return () => {
      if (batteryManager) {
        batteryManager.removeEventListener("levelchange", updateBatteryInfo);
        batteryManager.removeEventListener("chargingchange", updateBatteryInfo);
      }
    };
  }, []);

  const getBatteryIcon = () => {
    if (level >= 75) return <FaBatteryFull />;
    if (level >= 50) return <FaBatteryHalf />;
    if (level >= 25) return <FaBatteryQuarter />;
    return <FaBatteryEmpty />;
  };

  if (!isSupported) {
    return null; // Don't show if battery API is not supported
  }

  return (
    <div className="status-icon" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      {charging && <FaBolt style={{ color: '#eab308', fontSize: '0.8em' }} />}
      {getBatteryIcon()}
      <span style={{ fontSize: '0.9em' }}>{level}%</span>
    </div>
  );
};

export default Battery;
