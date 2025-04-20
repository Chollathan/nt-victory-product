// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthProvider> {/* ห่อ App ด้วย AuthProvider */}
    <Router> {/* ห่อ App ด้วย Router */}
      <App />
    </Router>
  </AuthProvider>
);
