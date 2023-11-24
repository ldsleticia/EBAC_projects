import { Component } from "react";

export default class Inputs extends Component {
  render() {
    return (
      <>
        {this.props.isShop ? (
          <div>
            <p>Digite seu nome: </p>
            <input
              type="text"
              id="name"
              value={this.props.value}
              onChange={this.props.onChange}
              required
            />

            <p>Digite sua cidade: </p>
            <input
              type="text"
              id="city"
              value={this.props.value}
              onChange={this.props.onChange}
              required
            />
          </div>
        ) : (
          ""
        )}

        {this.props.isBankAccount ? (
          <div>
            <p>Digite sua agência: </p>
            <input
              type="number"
              id="agency"
              value={this.props.value}
              onChange={this.props.onChange}
            />

            <p>Digite sua conta: </p>
            <input
              type="number"
              id="bankAccount"
              value={this.props.value}
              onChange={this.props.onChange}
            />
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}
