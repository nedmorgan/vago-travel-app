import React, { Component } from 'react'
import axios from 'axios'
import { LogInContainer } from './styled_components/LogInStyles'

export default class LogIn extends Component {
  state = {
    user: {
      name: '',
      password: '',
      countries: [],
      favorites: []
    },
    isSignedIn: false,
  }

  render() {
    return (
      <LogInContainer>
        <h1>Test</h1>
      </LogInContainer>
    )
  }
}
