import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>

          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
