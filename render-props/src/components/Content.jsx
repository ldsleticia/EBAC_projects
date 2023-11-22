import { Component } from "react";
import Currency from "./Currency";
import Label from "./Label";
import RealLabel from "./RealLabel";

export default class Content extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
    };
  }
  render() {
    return (
      <>
        <h1>Hello Render Pros</h1>
        <input
          type="number"
          value={this.state.value}
          onChange={(e) => this.setState({ value: Number(e.target.value) })}
        />
        <div>
          <RealLabel title="Real" value={this.state.value} parsedTo="BRL" />
        </div>
      </>
    );
  }
}
