import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Wrapper } from "./context/wrapper.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Wrapper><App /></Wrapper>
    
  </BrowserRouter>,
);
