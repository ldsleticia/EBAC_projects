import { Component } from "react";
import FormToShop from "./FormToShop";
import FormToBank from "./FormToBank";

export default class Content extends Component {
  render() {
    return (
      <>
        <FormToShop />
        <FormToBank />
      </>
    );
  }
}
