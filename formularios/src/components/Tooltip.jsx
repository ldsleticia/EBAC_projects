import React, { Component } from "react";
import "../styles/Tooltip.css";

export default class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };

    this._container = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("click", (e) => {
      if (
        !this._container.current ||
        this._container.current.contains(e.target)
      ) {
        return;
      } else {
        this.setState({ clicked: false });
      }
    });
  }

  render() {
    return (
      <div
        ref={this._container}
        className="tooltipContainer"
        onClick={() => this.setState({ clicked: true })}
      >
        {this.props.children}
        {this.state.clicked && <p>{this.props.text}</p>}
      </div>
    );
  }
}
