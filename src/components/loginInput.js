import React, { Component } from 'react';

class LoginInfo extends Component {
    render() {
        return (
            <div>
                <input type={this.props.type} placeholder={this.props.text} id={this.props.id} onChange={this.props.change}/> 
                <br></br>
                <br></br>
            </div>
            )
    }
}
export default LoginInfo