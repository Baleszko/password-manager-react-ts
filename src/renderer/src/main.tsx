import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import App from "./App";

// import { IpcRenderer } from "electron";
// import { electron } from "process";

window.api.readFileFromJson((readFileFromJson) => {
  let passwords = readFileFromJson;
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
