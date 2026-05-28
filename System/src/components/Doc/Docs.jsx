import React from "react";
import Desktop from "./Desktop";
import SearchPanel from "./SearchPanel";
import Notes from "../Apps/Notes";
import Files from "../Apps/Files";
import Terminal from "../Apps/Terminal";
import Spotify from "../Apps/Spotify";

const Docs = ({ openApps = [], openAppHandler, closeAppHandler }) => {

  const handleOpenWindow = (item) => {
    // If type is "iframe" and has a URL → open in browser tab
    if (item.type === "iframe" && item.url) {
      window.open(item.url, "_blank");
      return;
    }

    // If type matches a known app → add it to the openApps array
    if (
      item.type === "notes" ||
      item.type === "folder" ||
      item.type === "terminal" ||
      item.type === "spotify"
    ) {
      openAppHandler(item.type);
    }
  };

  return (
    <div className="doc">
      <SearchPanel />
      <Desktop openWindow={handleOpenWindow} />

      {/* Render each app window ONLY if its key is in the openApps array */}
      {openApps.includes("notes")    && <Notes    onClose={() => closeAppHandler("notes")}    />}
      {openApps.includes("folder")   && <Files    onClose={() => closeAppHandler("folder")}   />}
      {openApps.includes("terminal") && <Terminal onClose={() => closeAppHandler("terminal")} />}
      {openApps.includes("spotify")  && <Spotify  onClose={() => closeAppHandler("spotify")}  />}
    </div>
  );
};

export default Docs;
