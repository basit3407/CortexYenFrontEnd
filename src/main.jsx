import React, { createRoot } from "react-dom/client";
import FabricInfoDisplay1 from "./components/FabricInfoDisplay1";
import { mockData } from "./mockData";
const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("root element not found");

const root = createRoot(rootElement);
root.render(
  <div style={{ display: "inline-block", width: "1440px", background: "white" }} data-ignore="used only for top most containter width">
    <FabricInfoDisplay1 {...mockData} />
  </div>
);
