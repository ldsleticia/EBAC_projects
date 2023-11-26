import { Component } from "react";
import FormToShop from "./FormToShop";
import "../styles/Content.css";
import FormToNewShopkeeper from "./FormToNewShopkeeper";

export default class Content extends Component {
  constructor() {
    super();

    this.state = {
      sended: false,
      formToNewShopkeeperFilled: false,
      formToShopFilled: false,
      sendForms: false,
    };
  }

  changeToFilledShopkeeper() {
    this.setState({ formToNewShopkeeperFilled: true });
    this.updateSendedState();
  }

  changeToFilledShop() {
    this.setState({ formToShopFilled: true });
    this.updateSendedState();
  }

  updateSendedState() {
    const { formToNewShopkeeperFilled, formToShopFilled } = this.state;
    if (formToNewShopkeeperFilled && formToShopFilled) {
      this.setState({ sended: true });
    } else {
      this.setState({ sended: false });
    }
  }

  render() {
    return (
      <>
        <div className="form-content">
          <div>
            <FormToNewShopkeeper
              onFormChange={() => this.changeToFilledShopkeeper()}
            />
          </div>
          <div>
            <FormToShop onFormChange={() => this.changeToFilledShop()} />
          </div>
        </div>

        <button
          onClick={() => this.setState({ send: true })}
          disabled={!this.state.sended}
          type="submit"
        >
          Enviar
        </button>

        <p>{this.state.sendForms ? "Informações enviadas" : ""}</p>
      </>
    );
  }
}
