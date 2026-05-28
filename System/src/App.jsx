import React, { useState, useEffect } from "react";
import "./app.scss";
import Docs from "./components/Doc/Docs";
import Nav from "./components/Nav";

const App = () => {
  // ✅ MULTIPLE WINDOWS: array of open app keys instead of single string
  const [openApps, setOpenApps] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  // Opens an app — adds its key to the array (avoids duplicates)
  const openAppHandler = (appName) => {
    if (!appName) return;
    setOpenApps((prev) =>
      prev.includes(appName) ? prev : [...prev, appName]
    );
  };

  // Closes an app — removes its key from the array
  const closeAppHandler = (appName) => {
    setOpenApps((prev) => prev.filter((app) => app !== appName));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isSmallScreen) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#000", color: "#fff", textAlign: "center", padding: "20px" }}>
        <h2>App is only available for tablet or desktop</h2>
      </div>
    );
  }

  return (
    <main>
      <Nav openAppHandler={openAppHandler} />
      <Docs
        openApps={openApps}
        openAppHandler={openAppHandler}
        closeAppHandler={closeAppHandler}
      />
    </main>
  );
};

export default App;
