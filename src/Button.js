import React, { Component } from 'react';
import './Button.css'

class Button extends Component {
    render() {
        return (
            <button disabled={(this.props.className === 'gray') ? this.props.state : this.props.popup} className={this.props.className} onClick={this.props.click} value={this.props.text}>{this.props.text}</button>
        )
    }
}

export default Button;