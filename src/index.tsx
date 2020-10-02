import { App } from "./app";
import { AppContext } from "./context";
import { GlobalStyle } from "./styles/global";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { light } from "styles/themes/light/light";

ReactDOM.render(
  <ThemeProvider theme={light}>
    <GlobalStyle />
    <AppContext.Provider>
      <App />
    </AppContext.Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
