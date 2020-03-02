import React from 'react';
import './App.css';
import'./components/post.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Navigation';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import Store from './store/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={Store}>
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
</Provider>
  );
}

export default App;
