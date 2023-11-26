import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ok: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/basic", {
        method: "GET",
        headers: {
          Authorization: "Basic stringbase64",
          "Content-Type": "application/json",
        },
      })
        .then((response) => this.setState({ ok: true }))
        .catch((error) => this.setState({ ok: false }));
  }

  render() {
    
    return <div>{String(this.state.ok)}</div>;
  }
}
