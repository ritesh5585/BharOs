import { FcFolder, FcDocument } from "react-icons/fc";
import { FaSpotify, FaEdge, FaWhatsapp, FaGithub } from "react-icons/fa";
import { SiWhatsapp, SiDiscord, SiBrave } from "react-icons/si";

export const icons = [
  {
    id: 1,
    name: "My Files",
    Icon: FcFolder,
    type: "folder"
  },
  {
    id: 2,
    name: "Notes",
    Icon: FcDocument,
    type: "notes"
  },
  {
    id: 3,
    name: "Whatsapp",
    Icon: SiWhatsapp,
    color: "#25D366",
    type: "iframe",
    url: "https://web.whatsapp.com/"
  },
  {
    id: 4,
    name: "Spotify",
    Icon: FaSpotify,
    color: "#1DB954",
    type: "iframe",
    url: "https://open.spotify.com/embed"
  },
  {
    id: 5,
    name: "Browser",
    Icon: FaEdge,
    color: "#0078D7",
    type: "iframe",
    url: "https://bing.com"
  },
  {
    id: 7,
    name: "GitHub",
    Icon: FaGithub,
    color: "#ffffff",
    type: "iframe",
    url: "https://github.com"
  },
  {
    id: 8,
    name: "Discord",
    Icon: SiDiscord,
    color: "#5865F2",
    type: "iframe",
    url: "https://discord.com/app"
  },
];