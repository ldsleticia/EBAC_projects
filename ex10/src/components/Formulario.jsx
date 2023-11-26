import { Component } from "react";

export default class Formulario extends Component {
  constructor() {
    super();

    this.state = {
      marcas: [],
      modelosDeCarros: [],
    };
  }

  componentDidMount() {
    this.consomeMarcas();
    this.consomeModelos();
  }

  consomeMarcas() {
    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
      .then((res) => res.json())
      .then((result) => this.setState({ marcas: result }));
  }

  consomeModelos() {
    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos")
      .then((res) => res.json())
      .then((resultado) => this.setState({ modelosDeCarros: resultado }));
  }

  render() {
    return (
      <div>
        <h1>Formulario</h1>
        <p>Selecione uma marca:</p>
        <select name="cars" id="cars">
          {this.state.marcas.map((marca) => {
            return <option key={marca.codigo}>{marca.nome}</option>;
          })}
        </select>
      </div>
    );
  }
}
