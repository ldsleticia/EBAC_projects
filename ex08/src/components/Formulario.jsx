import { Component } from "react";
import Inputs from "./Inputs";
import Content from "./Content";
import Modal from "./Modal";

export default class Formulario extends Component {
  constructor() {
    super();

    this.state = {
      responseObject: {
        name: "",
        email: "",
      },
      responseSaved: [],
      reversedOrder: false,
      sended: false,
      showed: false,
      addedName: false,
      addedNameCount: 0,
      modalData: {
        name: "",
        email: "",
      },
    };
  }

  handlePreventDefault = (e) => {
    e.preventDefault();
    this.setState({
      responseObject: {
        ...this.state.responseObject,
        name: this.state.name,
        email: this.state.email,
      },
      responseSaved: [
        ...this.state.responseSaved,
        {
          name: this.state.name,
          email: this.state.email,
        },
      ],
      addedNameCount: this.state.addedNameCount + 1,
      sended: true,
    });
    e.target.reset();
  };

  changeField(field, value) {
    if (field === "name") {
      this.setState({ addedName: true });
    }
    this.setState({ [field]: value });
  }

  deleteItem = (index) => {
    const newList = this.state.responseSaved.filter((item, i) => {
      return i !== index;
    });
    this.setState({ responseSaved: newList });
  };

  showDetails = (index) => {
    this.setState({ showed: true });
    this.setState({ modalData: this.state.responseSaved[index] });
  };

  closeDetails = () => {
    this.setState({ showed: false });
    this.setState({
      modalData: {
        name: "",
        email: "",
      },
    });
  };

  render() {
    return (
      <>
        <form
          style={{ textAlign: "center" }}
          onSubmit={this.handlePreventDefault}
        >
          <h1>Formulario</h1>
          <Inputs
            onChange={(e) => this.changeField(e.target.id, e.target.value)}
          />

          <button type="submit" disabled={!this.state.addedName}>
            Enviar
          </button>
        </form>

        <Content
          onShowSelected={this.showDetails}
          onDeleteSelected={this.deleteItem}
          responseObject={this.state.responseObject}
          responseSaved={this.state.responseSaved}
          sended={this.state.sended}
          reversedOrder={this.state.reversedOrder}
        />

        <div style={{ textAlign: "center" }}>
          <button
            disabled={
              !this.state.addedName || this.state.responseSaved.length <= 1
            }
            onClick={() => this.setState({ reversedOrder: true })}
          >
            Ordem reversa
          </button>
        </div>

        <Modal
          onCloseSelected={this.closeDetails}
          showed={this.state.showed}
          exhibitionData={this.state.modalData}
        />
      </>
    );
  }
}
