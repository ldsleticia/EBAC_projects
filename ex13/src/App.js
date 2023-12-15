import logo from './logo.svg';
import './App.css';
import FormularioLoja from './components/FormularioLoja';
import FormularioVendedor from './components/FormularioVendedor';

function App() {
  return (
    <div className="App">
      <FormularioLoja/>
      <FormularioVendedor/>
    </div>
  );
}

export default App;
