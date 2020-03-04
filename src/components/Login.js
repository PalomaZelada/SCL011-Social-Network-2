import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import "firebase/auth";
import LoginInfo from './loginInput';
import Button1 from './buttonBasic';
import './welcome.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.id]: e.value
        })
    }

    // handleSubmit(e) {
    //     //this.setState({
    //         // [e.target.id]: e.target.value
    //         console.log(this.state)
    //    // })
    // }

    // //Creando la funcion login
    loginUser() {
        let email = this.state.email
        let password = this.state.password

        firebase.auth().signInWithEmailAndPassword(email, password)
    }

    render() {
        return (
            <div>
                <h1>Bienvenida a Feminist PWR</h1>
                <div className="login-form">
                    <div className="input-space">
                        <LoginInfo
                            type="text"
                            change={e => this.handleChange(e.target)}
                            text="Email"
                            id="email"
                        />
                    </div>
                    <div className="input-space">
                        <LoginInfo
                            type="password"
                            change={e => this.handleChange(e.target)}
                            text="Contraseña"
                            id="password"
                        />
                    </div>
                    <div>
                        <Button1
                            name="Iniciar Sesión"
                            funct={this.loginUser}
                        />
                        <Link to='/signup'>
                            <button className="login-signup">Crear cuenta</button>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default Login;