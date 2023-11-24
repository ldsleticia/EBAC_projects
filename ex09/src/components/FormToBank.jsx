import { Component } from "react";
import Inputs from "./Inputs";

export default class FormToBank extends Component {
  constructor() {
    super();

    this.state = {
      isBankAccount: false,
      bankAccount: "",
      agency: "",
    };
  }

  changeField(field, value) {
    this.setState = { [field]: value };
    console.log(field, value)
  }

  changeStateForBankAccount() {
    this.setState({
      isBankAccount: true,
    });
  }

  render() {
    return (
      <>
        <h1>Dados Bancários</h1>
        <form>
          <Inputs
            isBankAccount={this.changeStateForBankAccount}
            onChange={(e) => this.changeField(e.target.id, e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>

        <p>{this.state.bankAccount}</p>
      </>
    );
  }
}
