import { Component } from "react";
import "../styles/Modal.css";

export default class Modal extends Component {
  closeModal = () => {
    this.props.onCloseSelected();
  };
  render() {
    return (
      <>
        {this.props.showed ? (
          <div className="modal">
            <p className="prop-modal"> Nome: {this.props.exhibitionData.name} </p>
            <p className="prop-modal"> Email: {this.props.exhibitionData.email} </p>
            <button
            className="button-close-modal"
              onClick={() => {
                this.closeModal();
              }}
            >
              Fechar
            </button>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}
