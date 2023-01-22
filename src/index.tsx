import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

export { Modal } from "./modal";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div data-theme="emerald">
      <App />
    </div>
  </React.StrictMode>
);

