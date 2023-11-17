import { Component } from "react";
import "../styles/Content.css";

export default class Content extends Component {
  deleteItem = (index) => {
    this.props.onDeleteSelected(index);
  };

  showDetails = (index) => {
    this.props.onShowSelected(index);
  };

  render() {
    return (
      <>
        <div className="results">
          {this.props.sended ? (
            <div>
              <p>Salvos: </p>
              <ul>
                {this.props.responseSaved.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="list"
                    >
                      {item.name}

                      <button
                      className="content-button"
                        onClick={() => {
                          this.deleteItem(index);
                        }}
                      >
                        Deletar
                      </button>

                      <button
                      className="content-button"
                        onClick={() => {
                          this.showDetails(index);
                        }}
                      >
                        Ver Detalhes
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="results">
          {this.props.sended && this.props.reversedOrder ? (
            <div>
              <p>Salvos ao contrário: </p>
              <ul>
                {this.props.responseSaved.toReversed().map((item, index) => {
                  return (
                    <li key={index} className="list">
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}
