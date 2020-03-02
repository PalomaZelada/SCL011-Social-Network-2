import React from 'react';
import firebase from 'firebase/app';
import "firebase/auth";
import LoginInfo from './loginInput';
import Button from './buttonBasic';
import ObserverMode from './Observer';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: '',
            user:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.newAccount = this.newAccount.bind(this);

    }

    handleChange(e) {
        this.setState({
            [e.id]: e.value
        })
    }


    //Creando la funcion login
    newAccount() {
        let email = this.state.email
        let password = this.state.password
    
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(){
            })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          window.alert("Error " + errorMessage + errorCode);
        });
        new ObserverMode()
      }

    //   handleSubmit(e) {
    //     newAccount()
    //            }
            
    render() {
        return (
            <div>
                <div>
                    <LoginInfo
                        type="text"
                        change={e => this.handleChange(e.target)}
                        text="Nombre"
                        id="user"
                    />
                </div>
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
                    <Button
                        name="Iniciar Sesión"
                        funct={this.newAccount}
                    />
                </div>
            </div>
        )
    }
}

export default Signup;