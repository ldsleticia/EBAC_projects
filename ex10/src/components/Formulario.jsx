import { Component } from "react";

export default class Formulario extends Component {
  constructor() {
    super();

    this.state = {
      marcas: [],
      modelosDeCarros: [],
      anos: [],
    };
  }

  componentDidMount() {
    this.consomeMarcas();
    this.consomeModelos();
    this.consomeAnosDeModelos();
    this.consomeValor();
  }

  consomeMarcas() {
    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
      .then((res) => res.json())
      .then((result) => this.setState({ marcas: result }));
  }

  consomeModelos() {
    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos")
      .then((res) => res.json())
      .then((resultado) =>
        this.setState({ modelosDeCarros: resultado.modelos })
      );
  }

  consomeAnosDeModelos() {
    fetch(
      "https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos"
    )
      .then((res) => res.json())
      .then((resultado) => this.setState({ anos: resultado }));
  }

  consomeValor() {
    fetch(
      "https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/2014-3"
    )
      .then((res) => res.json())
      .then((resultado) => console.log(resultado));
  }

  render() {
    return (
      <div>
        <h1>Formulario</h1>
        <p>Selecione as informacoes do carro:</p>
        <select name="cars" id="cars">
          {this.state.marcas.map((marca) => {
            return (
              <option key={marca.codigo} value={marca.codigo}>
                {marca.nome}
              </option>
            );
          })}
        </select>

        <select>
          {this.state.modelosDeCarros.map((modelo) => {
            return (
              <option key={modelo.ano} value={modelo.codigo}>
                {modelo.nome}
              </option>
            );
          })}
        </select>

        <select>
          {this.state.anos.map((ano) => {
            return (
              <option key={ano.codigo} value={ano.codigo}>
                {ano.nome}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
