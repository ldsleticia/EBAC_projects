import { Component } from "react";
import NameLabel from "./NameLabel";
import CityLabel from "./CityLabel";
import Inputs from "./Inputs";

export default class FormToShop extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      city: "",
      addedName: false,
      addedCity: false,
      sended: false,
    };
  }

  changeField(field, value) {
    if (field === "name") {
      this.setState({
        addedName: true,
      });
    }
    if (field === "city") {
      this.setState({
        addedCity: true,
      });
    }
    this.setState({ [field]: value, sended: false });
  }

  handlePreventDefault = (e) => {
    e.preventDefault();
    e.target.reset();
    this.setState({ sended: true });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handlePreventDefault}>
        <h1>Ficha cadastral</h1>
          <Inputs
            onChange={(e) => this.changeField(e.target.id, e.target.value)}
          />
          <NameLabel title="Nome do usuário" name={this.state.name} />
          <CityLabel title="Cidade" cityName={this.state.city} />
          <button disabled={!this.state.addedName || !this.state.addedCity}>
            Enviar
          </button>
        </form>

        <p>{this.state.sended ? "Enviado com sucesso" : ""}</p>
      </>
    );
  }
}
