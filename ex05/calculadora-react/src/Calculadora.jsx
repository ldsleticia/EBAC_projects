import React, { Component } from "react";
import "./Calculadora.css"

class Calculadora extends Component {
  constructor() {
    super();

    this.state = {
      numberDigit: "",
      isResult: false,
      lastCharIsOperator: false,
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (/^\d$/.test(event.key)) {
      this.handleAddNumber(event.key);
    } else {
      if (/^[+\-*\/=Cc\n\r]$/.test(event.key)) {
        this.handleAddSimbol(event.key);
      }
      if (event.key === "Enter" || event.key === "Return") {
        this.evaluateExpression(this.state.numberDigit);
      }
    }
  };

  evaluateExpression(expression) {
    const regex = /^\d+[\+\-\*\/]\d+$/;

    if (this.state.lastCharIsOperator) {
      this.setState({
        numberDigit:
          "Expressão inválida. Limpe a calculadora e refaça a expressão",
        isResult: true,
      });
    }

    if (regex.test(expression)) {
      const result = eval(expression);
      this.setState({
        numberDigit: result.toString(),
        isResult: false,
      });
    } else {
      return;
    }
  }

  handleAddSimbol(simbol) {
    if (simbol === "=" || simbol === "Enter" || simbol === "Return") {
      this.evaluateExpression(this.state.numberDigit);
    } else if (simbol === "C" || simbol === "c") {
      this.clearResult();
    } else if (this.state.numberDigit) {
      this.setState({
        numberDigit: this.state.numberDigit.concat(simbol),
        isResult: false,
        lastCharIsOperator: /^[+\-*\/]$/.test(simbol),
      });
    }
  }

  clearResult() {
    this.setState({
      numberDigit: "",
      isResult: false,
    });
  }

  handleAddNumber(number) {
    if (this.state.numberDigit && !this.state.isResult) {
      this.setState({
        numberDigit: this.state.numberDigit.concat(number),
      });
    } else {
      this.setState({
        numberDigit: number,
        isResult: false,
      });
    }
  }

  render() {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const simbols = ["+", "*", "-", "/"];

    return (
      <main className="mainClass">
      <h1>{this.state.numberDigit ? this.state.numberDigit : "0"}</h1>
      <div className="container">
          {numbers.map((number) => (
            <button className="item" onClick={() => this.handleAddNumber(number)} key={number}>
              {number}
            </button>
          ))}
            {simbols.map((simbol) => (
              <button className="simbols" onClick={() => this.handleAddSimbol(simbol)} key={simbol}>
                {simbol}
              </button>
          ))}
          <button
          className="ac-button"
          onClick={() => {
            this.handleAddSimbol("C");
          }}
        >
          {" "}
          C{" "}
        </button>
        <button
          className="equal-button"
          onClick={() => {
            this.handleAddSimbol("=");
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

export default Calculadora;
