import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
            <nav className="nav-bar">
              <Link to="/:userId">{this.state.user.name}'s Dashboard</Link>
            </nav>
            : null
        }
      </div>
    )
  }
}
