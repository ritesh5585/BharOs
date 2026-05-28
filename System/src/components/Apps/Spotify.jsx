import React from "react";
import AppWindow from "../Doc/AppWindow";

const Spotify = ({ onClose }) => {
  return (
    <AppWindow title="Spotify" onClose={onClose}>
      <iframe
        title="Spotify Embed"
        style={{ borderRadius: "12px", display: "block" }}
        src="https://open.spotify.com/embed/playlist/36AbvtVfjUj7kf5jMha1E6?utm_source=generator&theme=0"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </AppWindow>
  );
};

export default Spotify;
