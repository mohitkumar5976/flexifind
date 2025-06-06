import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import muiTheme from "../theme.ts";
import AppProvider from "./contexts/AppContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <ThemeProvider theme={muiTheme}>
          <App />
        </ThemeProvider>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);
