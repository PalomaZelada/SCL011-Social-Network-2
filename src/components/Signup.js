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
            email: '',
            password: '',
            user: ''
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
            .then(function () {
            })
            .catch(function (error) {
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
                <div className="join-text">
                <h4>
    ¿Quieres unirte a la red Feminista más grande del país?
</h4>
<p>
    Crea tu cuenta ahora y participa en nuestro foro sobre temas reales que afectan nuestra cotidianidad
</p>
                </div>
                <div className="login-form space-top">
                    <div>
                        <p>Nombre</p>
                        <LoginInfo
                            type="text"
                            change={e => this.handleChange(e.target)}
                            text="Nombre"
                            id="user"
                        />
                    </div>
                    <div>
                        <p>Email</p>
                        <LoginInfo
                            type="text"
                            change={e => this.handleChange(e.target)}
                            text="Email"
                            id="email"
                        />
                    </div>
                    <div>
                        <p>Crea una contraseña</p>
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
            </div>
        )
    }
}

export default Signup;