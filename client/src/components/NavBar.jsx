import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { NavContainer } from './styled_components/NavBarStyles'

export default class NavBar extends Component {
  state = {
    isSignedIn: true,
    user: [],
  }

  componentDidMount = () => {
    axios.get('/api/v1/user').then(response => {
      console.log(response.data[0])
      const user = response.data[0]
      this.setState({ user })
    })
  }

  render() {
    return (
      <div>
        {
          this.state.isSignedIn ?
            <NavContainer >
              <div>
                <h1>Vago</h1>
                <i class="fas fa-passport"></i>
              </div>
              <Link className="user-link" to={`/${this.state.user._id}`}>{this.state.user.name}'s Dashboard</Link>
            </NavContainer>
            :
            <NavContainer >
              <div className="nav-flex-1">
                <h1>Vago</h1>
                <i class="fas fa-passport"></i>
              </div>
            </NavContainer>
        }
      </div>
    )
  }
}
