import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';




const rootb = ReactDOM.createRoot(
     document.getElementById('root') as HTMLElement
);
rootb.render(
     <React.StrictMode>
          <div data-theme="emerald">
               <App />
          </div>
     </React.StrictMode>
);

