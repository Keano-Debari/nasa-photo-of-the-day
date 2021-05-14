import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from 'styled-components'
import "./index.css";
import App from "./App";
import themeObj from './Theme';





ReactDOM.render(
  <ThemeProvider theme={themeObj}>
    <App />
  </ThemeProvider>, 
document.getElementById("root")
);
