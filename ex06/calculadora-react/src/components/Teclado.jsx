import React, { Component } from "react";
import "../styles/Teclado.css";

class Teclado extends Component {
  render() {
    return (
      <main>
        <div className="container">
          {this.props.numbers.map((number) => (
            <button
              className="item"
              onClick={() => this.props.handleAddNumber(number)}
              key={number}
            >
              {number}
            </button>
          ))}
          {this.props.simbols.map((simbol) => (
            <button
              className="simbols"
              onClick={() => this.props.handleAddSimbol(simbol)}
              key={simbol}
            >
              {simbol}
            </button>
          ))}

          <button
            className="ac-button"
            onClick={() => {
              this.props.handleAddSimbol("C");
            }}
          >
            {" "}
            C{" "}
          </button>
          <button
            className="equal-button"
            onClick={() => {
              this.props.handleAddSimbol("=");
            }}
          >
            {" "}
            ={" "}
          </button>
        </div>
      </main>
    );
  }
}

export default Teclado;
