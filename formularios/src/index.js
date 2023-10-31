import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Formulario from './components/Formulario';
import FormCPF from './components/FormCPF';
import ControledComponent from './components/ControledComponent';
import UncontroledComponent from './components/UncontroledComponent';
import Moments from './components/Moments';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      {/* <Formulario/> */}
      {/* <FormCPF/> */}
      {/* <ControledComponent/> */}
      {/* <UncontroledComponent/> */}
      <Moments/>
    </div>
  </React.StrictMode>
);

reportWebVitals();
