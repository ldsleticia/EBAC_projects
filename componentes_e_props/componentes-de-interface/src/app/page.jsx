"use client";
import React, { Component } from "react";
import TextOnButton from "./TextOnButton";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      changed: false,
    };
  }

  changeText = (e) => {
    const newText = e.target.value;
    this.setState({
      text: newText,
      changed: e.target.value.length > 0,
    });
  };

  render() {
    return (
      <div>
        <h1>Modulo 5 - Componentes de função</h1>
        <input onChange={this.changeText} />
        {this.state.changed ? (
          <TextOnButton text={this.state.text} />
        ) : (
          <p>Vazio</p>
        )}
      </div>
    );
  }
}

export default Home;
