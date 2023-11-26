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
  }

  consomeMarcas() {
    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ marcas: result });
        this.consomeModeloComBaseNaMarca(result[0]?.codigo);
      });
  }

  consomeModeloComBaseNaMarca(marca) {
    fetch(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos`
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({ modelosDeCarros: result.modelos });
      });
  }

  consomeAnoComBaseNaMarcaEModelo(marca, modelo) {
    fetch(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos/${modelo}/anos`
    )
      .then((res) => res.json())
      .then((result) => console.log(result));
  }

  changeMarca = (e) => {
    const marca = e.target.value;
    this.consomeModeloComBaseNaMarca(marca);
  };

  render() {
    return (
      <>
        <select name="cars" id="cars" onChange={this.changeMarca}>
          <option value="">Selecione uma marca</option>
          {this.state.marcas.map((marca) => {
            return (
              <option key={marca.codigo} value={marca.codigo}>
                {marca.nome}
              </option>
            );
          })}
        </select>

        <select>
          <option value="">Selecione um modelo </option>
          {this.state.modelosDeCarros.map((modelo) => {
            return (
              <option key={modelo.ano} value={modelo.codigo}>
                {modelo.nome}
              </option>
            );
          })}
        </select>
      </>
    );
  }
}
