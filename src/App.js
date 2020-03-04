import React, { Component } from 'react';
import './App.css';
import'./components/post.css';
import firebase from 'firebase/app';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Navigation';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';


function App () {   
  return (   
    <Router>
      <div>
        <Nav />
        <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/home' component={Home} />
        <Route path='/profile' component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
