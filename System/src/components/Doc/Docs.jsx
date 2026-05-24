import React from "react";
import Desktop from "./Desktop";
import SearchPanel from "./SearchPanel";

const Docs = ({ openWindow }) => {
  return (
    <div className="doc">
      <SearchPanel />
      <Desktop openWindow={openWindow} />
    </div>
  );
};

export default Docs;
