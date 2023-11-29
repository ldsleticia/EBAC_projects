import { Component } from "react";

export default class Formulario extends Component {
  constructor() {
    super();

    this.state = {
      marcas: [],
      modelosDeCarros: [],
      anos: [],
      valores: [],
      marcaSelecionada: "",
      modeloSelecionado: "",
      anoSelecionado: "",
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
      .then((result) => {
        this.setState({ anos: result });
        console.log(result);
      });
  }

  consomeValorComBaseNoAno(marca, modelo, ano) {
    fetch(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos/${modelo}/anos/${ano}`
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({ valores: result });
        console.log(result);
      });
  }

  changeMarca = (e) => {
    const marca = e.target.value;
    this.setState({ marcaSelecionada: marca });
    this.consomeModeloComBaseNaMarca(marca);
  };

  changeModelo = (e) => {
    const modelo = e.target.value;
    this.setState({ modeloSelecionado: modelo });
    const marcaSelecionada = this.state.marcaSelecionada;

    if (marcaSelecionada && modelo) {
      this.consomeAnoComBaseNaMarcaEModelo(marcaSelecionada, modelo);
    }
  };

  changeAno = (e) => {
    const ano = e.target.value;
    this.setState({ anoSelecionado: ano });
    const marcaSelecionada = this.state.marcaSelecionada;
    const modeloSelecionado = this.state.modeloSelecionado;

    if (marcaSelecionada && modeloSelecionado && ano) {
      this.consomeValorComBaseNoAno(marcaSelecionada, modeloSelecionado, ano);
    }
  };

  render() {
    return (
      <div>
        <select onChange={this.changeModelo}>
          <option value="">Selecione um modelo</option>
          {this.state.modelosDeCarros.map((modelo, index) => {
            return (
              <option key={index} value={modelo.codigo}>
                {modelo.nome}
              </option>
            );
          })}
        </select>

        <select onChange={this.changeAno}>
          <option>Selecione o ano</option>
          {this.state.anos.map((ano, index) => {
            return (
              <option key={index} value={ano.codigo}>
                {" "}
                {ano.nome}{" "}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
