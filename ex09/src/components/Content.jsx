import { Component } from "react";
import NameLabel from "./NameLabel";

export default class Content extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
    };
  }
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <div>
          <NameLabel
            title="Nome do usuário"
            name={this.state.name}
            capitalizedName={this.state.name}
          />
        </div>
      </>
    );
  }
}
