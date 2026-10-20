import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Keep links from the original draft working after moving to real page URLs.
const legacy = window.location.hash.match(
  /^#(home|about|work|projects|shop|contact)(\?.*)?$/,
);
if (legacy) {
  window.location.replace(
    `/${legacy[1] === "home" ? "" : legacy[1] + "/"}${legacy[2] || ""}`,
  );
} else {
  const root = document.getElementById("root")!;
  const app = <App path={window.location.pathname} />;
  if (root.hasChildNodes()) hydrateRoot(root, app);
  else createRoot(root).render(app);
}
