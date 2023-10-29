import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import './assets/css/App.css';
import './assets/css/index.css';
import './assets/css/personne.css';
import './assets/css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);