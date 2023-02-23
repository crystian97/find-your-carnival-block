import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { CarnivalBlocksContextProvider } from "./Contexts/CarnivalBlockContext";
import { GlobalStyle } from "./styles/global";
import defaultTheme from "./styles/themes/default";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CarnivalBlocksContextProvider>
        <App />
      </CarnivalBlocksContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
