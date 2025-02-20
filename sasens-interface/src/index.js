import React from 'react';
import ReactDOM from 'react-dom/client'; // Importação correta para React 18
import App from './App';
import './styles.css';

// Crie a raiz do aplicativo
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderize o aplicativo
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);