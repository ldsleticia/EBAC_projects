import "../styles/Formulario.css";
import React, { Component } from "react";

export default class Content extends Component {
  render() {
    return (
      <>
        {this.props.exibitionName && this.props.submitted ? (
          <p>
            Seu nome é: {this.props.capitalizeName(this.props.exibitionName)}
          </p>
        ) : (
          ""
        )}

        {this.props.exibitionAge && this.props.submitted ? (
          <p>Sua idade é: {this.props.exibitionAge} ano(s)</p>
        ) : (
          ""
        )}

        {this.props.exibitionGender && this.props.submitted ? (
          <p>Seu gênero é: {this.props.exibitionGender}</p>
        ) : (
          ""
        )}

        {this.props.exibitionCivilState && this.props.submitted ? (
          <p>Seu estado civil é: {this.props.exibitionCivilState}</p>
        ) : (
          ""
        )}

        {this.props.exibitionDocType &&
        this.props.submitted &&
        this.props.validateCpf(this.props.exibitionDocType) ? (
          <p>
            Seu documento é um CPF{" "}
            {this.props.chooseCpfOrCnpj(this.props.exibitionCpf)}
          </p>
        ) : (
          ""
        )}

        {this.props.exibitionDocType &&
        this.props.submitted &&
        this.props.validateCnpj(this.props.exibitionDocType) ? (
          <p>
            Seu documento é um CNPJ{" "}
            {this.props.chooseCpfOrCnpj(this.props.exibitionCnpj)}
          </p>
        ) : (
          ""
        )}

      </>
    );
  }
}
