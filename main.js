import App from "./src/App";
import "./src/styles/index.css";
import { createNewRow } from "./src/components/Modal";
import { getItems } from "./src/components/Modal";

const root = document.getElementById("app");
root.appendChild(App());
createNewRow(
  getItems().then(() => {
    const loading = document.getElementById("loading");
    loading.style.display = "none";
  })
);
