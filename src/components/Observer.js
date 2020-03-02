import React from 'react';
import firebase from 'firebase/app';
import "firebase/auth";
import {Redirect} from 'react-router-dom';
//import Home from './Home';

class ObserverMode extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    toHome: false,
  }
}
    observer() {
        firebase.auth().onAuthStateChanged(user => {
        console.log(user)
        
        })
      
      }
}

export default ObserverMode
