import { createTheme, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/styled-engine";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import '../prism.css'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>
);
