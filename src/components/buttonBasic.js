import React, { Component } from 'react';

class Button1 extends Component {
    render() {
        return (

            <button className="btnBasic login-signup" onClick={this.props.funct}>{this.props.name}</button>
        )
    }
}
export default Button1;