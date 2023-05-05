import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import App from "./App";

import { IpcRenderer } from "electron";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
