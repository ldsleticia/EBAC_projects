import { Component } from "react";
import "./styles/Resultado.css";

class Resultado extends Component {
  render() {
    return (
      <main>
        <h1>{this.props.numberDigit ? this.props.numberDigit : "0"}</h1>
      </main>
    );
  }
}

export default Resultado;
