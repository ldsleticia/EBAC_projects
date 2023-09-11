import React, { Component } from "react";
import "./index.css";

class Calculadora extends Component {
  constructor() {
    super();

    this.state = {
      numberDigit: "",
      simbolDigit: "",
      isResult: false,
    };
  }

  evaluateExpression(expression) {
    // expressao valida tem que dar match com a regex abaixo
    // \d+[\+|\-|\*|\/]\d+
    this.setState({
        numberDigit: eval(expression), 
        isResult: true
    })
  }

  handleAddSimbol(simbol) {
    if (simbol === "=") {
      this.evaluateExpression(this.state.numberDigit);
    }
    else if (this.state.numberDigit) {
      this.setState({
        numberDigit: this.state.numberDigit.concat(simbol),
      });
    }
  }

  handleAddNumber(number) {
    if (this.state.numberDigit && !this.state.isResult) {
      this.setState({
        numberDigit: this.state.numberDigit.concat(number),
      });
    } else {
      this.setState({
        numberDigit: number,
        isResult: false
      });
    }
  }

  render() {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const simbols = ["+", "=", "*", "-", "/"];

    return (
      <div className="Calculadora">
        <h1>Sou uma calculadora</h1>
        {/* exibir o resultado em um componente */}
        <h1 className="result">{this.state.numberDigit}</h1>
        <section>
          {numbers.map((number) => (
            <button onClick={() => this.handleAddNumber(number)} key={number}>
              {number}
            </button>
          ))}
          {simbols.map((simbol) => (
            <button onClick={() => this.handleAddSimbol(simbol)} key={simbol}>
              {simbol}
            </button>
          ))}
        </section>
      </div>
    );
  }
}

export default Calculadora;
