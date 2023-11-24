import { Component } from "react";

export default class Inputs extends Component {
  render() {
    return (
      <>
        Digite seu nome:{" "}
        <input
          type="text"
          id="name"
          value={this.props.value}
          onChange={this.props.onChange}
          required
        />
        Digite sua cidade:{" "}
        <input
          type="text"
          id="city"
          value={this.props.value}
          onChange={this.props.onChange}
          required
        />
      </>
    );
  }
}
