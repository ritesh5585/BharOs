import React from "react";
import "./app.scss";
import Docs from "./components/Doc/Docs";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main>
      <Nav/>
      <Docs />
    </main>
  );
};

export default App;
