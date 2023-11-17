  import { Component } from "react";
  import "../styles/Inputs.css";

  export default class Inputs extends Component {
    render() {
      return (
        <>
          <div className="flex-container">
            <div>
              Nome:
              <input
                value={this.props.value}
                id="name"
                className="customInput"
                type="text"
                onChange={this.props.onChange}
                required
              />
            </div>
            <div>
              Email:
              <input
                value={this.props.value}
                id="email"
                className="customInput"
                type="text"
                onChange={this.props.onChange}
              />
            </div>
          </div>
        </>
      );
    }
  }
