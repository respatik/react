import React, { Component } from 'react'

export default class Counterclass extends Component {
    constructor() {
        super()
        this.state = {
            mulaiAngka: 0,
        }
    }

    increment = () => {
        this.setState({
            mulaiAngka: this.state.mulaiAngka + 1
        })
    }

    decrement = () => {
        if (this.state.mulaiAngka <=0) {
            alert ("cannot be minus")
        } else {
            this.setState({
                mulaiAngka: this.state.mulaiAngka - 1
            });
        }
    }

    render () {
        return (
            <div className="counter-class">
                <h1 id="counter-class-h1">Counter Class</h1>
                <button className="decrement" onClick={this.decrement}>-</button>
                <h3 style={{display: "inline-block"}}>{this.state.mulaiAngka}</h3>
                <button className="increment" onClick={this.increment}>+</button>
            </div>
        )
    }
}