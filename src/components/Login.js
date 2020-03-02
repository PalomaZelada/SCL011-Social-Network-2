import React from 'react';
import firebase from 'firebase/app';
import "firebase/auth";
import LoginInfo from './loginInput';
import Button1 from './buttonBasic';
import ObserverMode from './Observer';
import {Redirect} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
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
    observer() {
        firebase.auth().onAuthStateChanged(user => {
        console.log(user)
        
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
        .then(<Redirect to= '/home' />)
    
        .catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         alert("Error: "+ errorMessage + errorCode)
         // ...
       });
    //    new ObserverMode()
     }

    render() {
        return (
                <div>
                    <h1>Bienvenida a Feminist PWR</h1>
                <div>
                    <LoginInfo
                        type="text"
                        change={e => this.handleChange(e.target)}
                        text="Email"
                        id="email"
                    />
                </div>
                <div>
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
                </div>
            </div>
        )
    }
}

export default Login;