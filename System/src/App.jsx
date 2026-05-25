import React, { useState, useEffect } from "react";
import "./app.scss";
import Docs from "./components/Doc/Docs";
import Nav from "./components/Nav";

const App = () => {
  const [openApp, setOpenApp] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isSmallScreen) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#000', color: '#fff', textAlign: 'center', padding: '20px' }}>
        <h2>App is only available for tablet or desktop</h2>
      </div>
    );
  }

  return (
    <main>
      <Nav setOpenApp={setOpenApp} />
      <Docs openApp={openApp} setOpenApp={setOpenApp} />
    </main>
  );
};

export default App;
