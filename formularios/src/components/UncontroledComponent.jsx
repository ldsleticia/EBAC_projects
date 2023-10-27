import { Component } from "react";
import Tooltip from "./Tooltip";
import '../index.css'

export default class UncontroledComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Tooltip text="teste">
          <h1>Hello</h1>
        </Tooltip>
      </>
    );
  }
}
