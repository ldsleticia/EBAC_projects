import { Component } from "react";

export default class ProductItem extends Component{
    constructor() {
        super ()

        this.state = {
            isAdded: false
        }
    }
    render() {
        return (
            <div key={this.props.id}>
                <h2 style={{display: "inline-block", marginRight: "5px"}}>{this.props.name}</h2>
                <p style={{display: "inline-block"}} >R$: {this.props.price.toFixed(2)}</p>
                <button onClick={() => this.setState({isAdded: !this.state.isAdded})}>
                    {this.state.isAdded ? "Adicionado" : "Adicionar"}
                </button>
            </div>
        );
    }
}