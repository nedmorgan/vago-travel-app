import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import LogIn from './components/LogIn'
import Home from './components/Home'
import Users from './components/Users'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={LogIn} />
            <Route path='/users' component={Users} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
