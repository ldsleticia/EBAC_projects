import React, { Component } from "react";
import "../styles/Inputs.css";

export default class Inputs extends Component {
  render() {
    return (
      <div className="inputs">
        <div className="inputs text">
          Nome:{" "}
          <input
            type="text"
            value={this.props.value}
            onChange={this.props.onChange}
            id="name"
            className="customInput"
            required={true}
          />
        </div>

        <div className="inputs text">
          Idade:{" "}
          <input
            type="number"
            value={this.props.age}
            onChange={this.props.onChange}
            id="age"
            className="customInput"
            required={true}
          />
        </div>

        <div className="inputs text">
          Documento:{" "}
          <input
            type="text"
            value={this.props.docType}
            onChange={this.props.onChange}
            id="docType"
            className="customInput"
            required={true}
          />
        </div>

        <div className="inputs alignment">
          Gênero:{" "}
          <input
            type="radio"
            value="Masculino"
            onChange={this.props.onChange}
            id="gender"
            name="gender"
            className="customRadio"
            required={true}
          />
          Masculino
          <input
            type="radio"
            value="Feminino"
            onChange={this.props.onChange}
            id="gender"
            name="gender"
            required={true}
          />
          Feminino
          <input
            type="radio"
            value="Outros"
            onChange={this.props.onChange}
            id="gender"
            name="gender"
            required={true}
          />
          Outros
        </div>
        <div className="inputs alignment">
          Estado civil:{" "}
          <input
            type="radio"
            value="Solteiro(a)"
            onChange={this.props.onChange}
            id="civilState"
            name="civilState"
            className="customRadio"
            required={true}
          />{" "}
          Solteiro(a)
          <input
            type="radio"
            value="Casado(a)"
            onChange={this.props.onChange}
            id="civilState"
            name="civilState"
            required={true}
          />{" "}
          Casado(a)
          <input
            type="radio"
            value="Outros"
            onChange={this.props.onChange}
            id="civilState"
            name="civilState"
            required={true}
          />{" "}
          Outros
        </div>

        <div className="inputs">
          <button type="submit">Enviar</button>
        </div>
      </div>
    );
  }
}
