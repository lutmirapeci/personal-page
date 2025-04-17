import React from "react";
// libs
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// styles
import "./assets/styles/index.css";
// main container
import App from "./App";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
