import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faPen,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faPen, faEnvelope, faLock);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
