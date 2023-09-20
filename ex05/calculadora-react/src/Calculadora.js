import React, { Component } from "react";
import "./Calculadora.css"

class Calculadora extends Component {
  constructor() {
    super();

    this.state = {
      numberDigit: "",
      simbolDigit: "",
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
      this.setState({
        numberDigit: "",
        isResult: false,
      });
    } else if (this.state.numberDigit) {
      this.setState({
        numberDigit: this.state.numberDigit.concat(simbol),
        isResult: false,
        lastCharIsOperator: /^[+\-*\/]$/.test(simbol),
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
        isResult: false,
      });
    }
  }

  render() {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const simbols = ["+", "=", "*", "-", "/", "C"];

    return (
      <div className="Calculadora">
        {/* exibir o resultado em um componente */}
        <h1 className="result">{this.state.numberDigit ? this.state.numberDigit : "0"}</h1>
        <section>
          {numbers.map((number) => (
            <button className="numberButtons" onClick={() => this.handleAddNumber(number)} key={number}>
              {number}
            </button>
          ))}
          </section>
          <section>
            {simbols.map((simbol) => (
              <button className="operatorButtons" onClick={() => this.handleAddSimbol(simbol)} key={simbol}>
                {simbol}
              </button>
          ))}
          </section>
          
        
      </div>
    );
  }
}

export default Calculadora;
