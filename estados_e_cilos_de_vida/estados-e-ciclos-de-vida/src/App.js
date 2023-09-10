import React, { Component } from "react";
import Input from "./Input";
import './index.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      changed: false,
    };
  }

  handleChange(event) {
    this.setState({
      text: event.target.value,
      changed: event.target.value.length > 0,
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Aula 5 - Aula 1 </h1>

        <Input onChange={this.handleChange.bind(this)} />
        {this.state.changed ? (
          <p
            style={{
              display: "block",
              heigth: "20",
              backgroundColor: "#000",
              color: "#fff",
              width: "100%",
            }}
          >
            {this.state.text}
          </p>
        ) : (
          <p> vazio </p>
        )}
      </div>
    );
  }
}

export default App;
