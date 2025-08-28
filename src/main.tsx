import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GuildBattleViewer from "./guild-battle-viewer.tsx";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GuildBattleViewer />
  </StrictMode>
);
