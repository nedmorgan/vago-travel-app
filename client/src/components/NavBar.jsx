import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavContainer } from './styled_components/NavBarStyles'

export default class NavBar extends Component {

  render() {
    return (
      <div>
        <NavContainer >
          <div>
            <h1><a className="home-link" href="/">Vago</a></h1>
            <i class="fas fa-passport"></i>
          </div>
          <Link className="user-link" to="/users">User Dashboard</Link>
        </NavContainer>
      </div>
    )
  }
}
