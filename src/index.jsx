import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import CustomRoutes from "./routes";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./hooks/useAuth";

import "./assets/css/style.scss";

import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CustomRoutes />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
