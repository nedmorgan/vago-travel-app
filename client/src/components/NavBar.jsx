import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class NavBar extends Component {
  state = {
    isSignedIn: true,
    user: [],
  }

  componentDidMount = () => {
    axios.get('/api/v1/users').then(response => {
      console.log(response)
      const user = response.data
      this.setState({ user })
    })
  }

  render() {
    return (
      <div>
        {
          this.state.isSignedIn ?
            <nav className="nav-bar">
              <Link to="/:userId">Dashboard</Link>
            </nav>
            : null
        }
      </div>
    )
  }
}
