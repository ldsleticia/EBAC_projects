import React, { Component } from "react";
import Inputs from "../components/Inputs";
import "../styles/Formulario.css";
import Content from "./Content";

export default class Formulario extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      age: 0,
      gender: "",
      civilState: "",
      docType: "",
      cpf: "",
      cnpj: "",
      submitted: false,
      exibitionName: "",
      exibitionAge: 0,
      exibitionGender: "",
      exibitionCivilState: "",
      exibitionDocType: "",
    };
  }

  handlePreventForm = (e) => {
    e.preventDefault();
    this.setState({
      name: this.state.name,
      age: this.state.age,
      gender: this.state.gender,
      civilState: this.state.civilState,
      docType: this.state.docType,
      cpf: this.state.cpf,
      cnpj: this.state.cnpj,
      submitted: true,
      exibitionName: this.state.name,
      exibitionAge: this.state.age,
      exibitionGender: this.state.gender,
      exibitionCivilState: this.state.civilState,
      exibitionDocType: this.state.docType,
      exibitionCpf: this.state.docType,
      exibitionCnpj: this.state.docType,
    });
    e.target.reset();
  };

  changeField(field, value) {
    this.setState({ [field]: value });
  }

  chooseCpfOrCnpj(data) {
    if (data.length === 11) {
      return "de número: " + data;
    } else if (data.length === 14) {
      return "de número: " + data;
    } else {
      return "Documento inválido";
    }
  }

  validateCpf(cpf) {
    cpf = cpf.replace(/\D/g, "");
    if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    var result = true;
    [9, 10].forEach(function (j) {
      var soma = 0,
        r;
      cpf
        .split(/(?=)/)
        .splice(0, j)
        .forEach(function (e, i) {
          soma += parseInt(e) * (j + 2 - (i + 1));
        });
      r = soma % 11;
      r = r < 2 ? 0 : 11 - r;
      if (r != cpf.substring(j, j + 1)) result = false;
    });
    return result;
  }

  validateCnpj(cnpj) {
    var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    var c = String(cnpj).replace(/[^\d]/g, "");

    if (c.length !== 14) return false;

    if (/0{14}/.test(c)) return false;

    for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
    if (c[12] != ((n %= 11) < 2 ? 0 : 11 - n)) return false;

    for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
    if (c[13] != ((n %= 11) < 2 ? 0 : 11 - n)) return false;

    return true;
  }

  capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  render() {
    return (
      <>
        <div className="formTitle">
          <h1>Formulário de Cadastro</h1>
        </div>
        <div className="flexContainer">
          <div className="flexChild">
            <form onSubmit={this.handlePreventForm}>
              <Inputs
                onChange={(e) => this.changeField(e.target.id, e.target.value)}
              />
            </form>
          </div>

          <div className="flexChild formResponses">
            <Content
              exibitionName={this.state.exibitionName}
              capitalizeName={this.capitalizeName}
              exibitionAge={this.state.exibitionAge}
              exibitionGender={this.state.exibitionGender}
              exibitionCivilState={this.state.exibitionCivilState}
              exibitionDocType={this.state.exibitionDocType}
              submitted={this.state.submitted}
              exibitionCpf={this.state.exibitionCpf}
              validateCpf={this.validateCpf}
              chooseCpfOrCnpj={this.chooseCpfOrCnpj}
              exibitionCnpj={this.state.exibitionCnpj}
              validateCnpj={this.validateCnpj}
            />
          </div>
        </div>
      </>
    );
  }
}
