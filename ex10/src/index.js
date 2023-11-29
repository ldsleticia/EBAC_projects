import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Formulario from './components/Formulario';
import FormComFunction from './components/FormComFunction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Formulario/>
    <FormComFunction/>
  </React.StrictMode>
);

reportWebVitals();
