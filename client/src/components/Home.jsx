import React, { Component } from 'react'
import { HomeContainer } from './styled_components/HomeStyles'

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <h1> Always wanted to travel....</ h1>
        <h2>Sign in and learn about some amazing places</h2>
      </HomeContainer>
    )
  }
}
