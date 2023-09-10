import React, { Component } from "react";
import "./index.css";

class LifeCycles extends Component {
  constructor() {
    super();
    this.state = {
      bool: false,
    };
  }

  // segundo docs, deprecado. Deve utilizar componentDidUpdate()
  //   componentWillUpdate() {
  //     console.log("componentWillUpdate");
  //   }

  // segundo docs, deprecado. Deve utilizar componentDidUpdate()
  //   componentWillReceiveProps() {
  //     console.log("componentWillReceiveProps");
  //   }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return !this.state.bool;
  }

  render() {
    return (
      <div className="LifeCycles">
        <h1 onClick={() => this.setState({ bool: true })}> render </h1>
        {this.state.bool && <p>updated</p>}
      </div>
    );
  }
}

export default LifeCycles;
