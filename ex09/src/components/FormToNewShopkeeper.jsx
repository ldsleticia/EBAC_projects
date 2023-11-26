import { Component } from "react";
import Inputs from "./Inputs";
import NameLabel from "./NameLabel";

export default class FormToNewShopkeeper extends Component {
  constructor() {
    super();

    this.state = {
      shopkeeper: "",
      seller: "",
      isShopkeeper: false,
    };
  }

  changeField(field, value) {
    this.setState({ [field]: value });
    this.props.onFormChange(this.state.shopkeeper && this.state.seller);
  }

  render() {
    return (
      <>
        <form onSubmit={this.handlePreventDefault}>
          <h1>Ficha Lojista</h1>
          <Inputs
            isShopkeeper={(this.setState.isShopkeeper = true)}
            onChange={(e) => this.changeField(e.target.id, e.target.value)}
          />
          <p> Confira os dados abaixo: </p>
        </form>

        <NameLabel title={"Nome do lojista"} name={this.state.shopkeeper}/>
        <NameLabel title={"Nome do vendedor"} name={this.state.seller}/>
      </>
    );
  }
}
