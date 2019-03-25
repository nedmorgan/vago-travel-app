import React, { Component } from 'react'
import { HomeContainer } from './styled_components/HomeStyles'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <h1> Always wanted to travel....</ h1>
        <h2>Sign in and learn about some amazing places!</h2>
        <Link className="signup-link waves-effect waves-light btn-large" to='/login'>Sign Up!</Link>
        <div className="airplane-div">
          <i class="airplane fas fa-plane"></i>
        </div>
      </HomeContainer>
    )
  }
}
