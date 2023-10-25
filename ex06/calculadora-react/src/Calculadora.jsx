import React, { Component } from "react";
import "../src/styles/Calculadora.css";
import Resultado from "./Resultado";
import Teclado from "./Teclado";

class Calculadora extends Component {
  constructor() {
    super();

    this.state = {
      numberDigit: "",
      isResult: false,
      lastCharIsOperator: false,
    };

    this.handleAddNumber = this.handleAddNumber.bind(this);
    this.handleAddSimbol = this.handleAddSimbol.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === "Backspace" || event.key === "Delete") {
      const updatedNumber = this.state.numberDigit.slice(0, -1);
      this.setState({
        numberDigit: updatedNumber,
      });
    }
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
        isResult: true,
      });
    } else {
      return;
    }
  }

  handleAddSimbol(simbol) {
    if (simbol === "=" || simbol === "Enter" || simbol === "Return") {
      this.evaluateExpression(this.state.numberDigit);
      this.setState({
        isResult: true,
      });
      if(this.state.isResult) {
        this.clearResult();
      }
    } 
    else if (simbol === "C" || simbol === "c") {
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
        <div className="box">
          <Resultado numberDigit={this.state.numberDigit} />
        </div>
        <div className="overlay">
          <Teclado
            numbers={numbers}
            simbols={simbols}
            handleAddNumber={this.handleAddNumber}
            handleAddSimbol={this.handleAddSimbol}
          />
        </div>
      </main>
    );
  }
}

export default Calculadora;
