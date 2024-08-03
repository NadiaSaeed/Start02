import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

// Create a root container instead of using ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use root.render to render your app
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Measuring performance in your app
reportWebVitals();
