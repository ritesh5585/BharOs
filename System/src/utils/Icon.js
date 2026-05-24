import { FcFolder, FcDocument } from "react-icons/fc";
import { FaSpotify, FaEdge, FaWhatsapp } from "react-icons/fa";
import { Terminal, Settings, } from "lucide-react";
import { SiWhatsapp, SiDiscord, SiBrave } from "react-icons/si";

export const icons = [
  {
    id: 1,
    name: "My Files",
    Icon: FcFolder,
  },
  {
    id: 2,
    name: "Notes",
    Icon: FcDocument,
  },
  {
    id: 3,
    name: "Whatsapp",
    Icon: SiWhatsapp,
  },
  {
    id: 4,
    name: "Spotify",
    Icon: FaSpotify,
    color: "#1DB954",
  },
  {
    id: 5,
    name: "Browser",
    Icon: FaEdge,
    color: "#0078D7",
  },
  {
    id: 6,
    name: "Terminal",
    Icon: Terminal,
    color: "#00FF00",
  },
  {
    id: 7,
    name: "Settings",
    Icon: Settings,
    color: "#E6E6E6",
  },
  {
    id: 8,
    name: "Settings",
    Icon: SiDiscord,
    color: "#5865F2",
  },

];