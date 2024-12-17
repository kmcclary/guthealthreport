import React from 'react';
import ReactDOM from 'react-dom/client';
import MicrobiomeReport from './App'; // Ensure this path is correct
import './index.css'; // Your global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MicrobiomeReport /> {/* Ensure the correct component is being rendered */}
  </React.StrictMode>
);

// Removed reportWebVitals call since it's not imported
