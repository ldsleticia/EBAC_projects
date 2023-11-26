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
      isShop: false,
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
    this.props.onFormChange(this.state.addedName && this.state.addedCity);
  }

  render() {
    return (
      <>
        <form onSubmit={this.handlePreventDefault}>
          <h1>Ficha Cadastral</h1>
          <Inputs
            isShop={(this.setState.isShop = true)}
            onChange={(e) => this.changeField(e.target.id, e.target.value)}
          />

          <p> Confira os dados abaixo: </p>

          <NameLabel title="Nome do usuário" name={this.state.name} />
          <CityLabel title="Cidade" cityName={this.state.city} />
        </form>
      </>
    );
  }
}
