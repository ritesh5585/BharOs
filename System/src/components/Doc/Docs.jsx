import React, { useState } from "react";
import Desktop from "./Desktop";
import SearchPanel from "./SearchPanel";
import Notes from "../Apps/Notes";
import Files from "../Apps/Files";

import Terminal from "../Apps/Terminal";

const Docs = ({ openApp, setOpenApp }) => {
  const handleOpenWindow = (item) => {
    if (item.type === "iframe" && item.url) {
      window.open(item.url, "_blank");
      return;
    }

    if (
      item.type === "notes" ||
      item.type === "folder" ||
      item.type === "terminal"
    ) {
      setOpenApp(item.type);
      return;
    }

    setOpenApp(null);
  };

  return (
    <div className="doc">
      <SearchPanel />
      <Desktop openWindow={handleOpenWindow} />

      {openApp === "notes" && <Notes onClose={() => setOpenApp(null)} />}
      {openApp === "folder" && <Files onClose={() => setOpenApp(null)} />}
      {openApp === "terminal" && <Terminal onClose={() => setOpenApp(null)} />}
    </div>
  );
};

export default Docs;
