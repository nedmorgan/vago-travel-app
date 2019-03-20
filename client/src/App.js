import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <h1>Test</h1>
        </div>
      </Router>
    );
  }
}

export default App;
