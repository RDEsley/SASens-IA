import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import './styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Raiz do aplicativo
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o aplicativo
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);