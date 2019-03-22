import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import LogIn from './components/LogIn'
import Home from './components/Home'
import Users from './components/Users'
import User from './components/User'
import Country from './components/Country'

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={LogIn} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/users/:userId' component={User} />
            <Route exact path='/users/:userId/countries/:countryId' component={Country} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
