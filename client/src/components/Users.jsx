import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { UsersContainer } from './styled_components/UsersStyles'

export default class Users extends Component {

  state = {
    users: []
  }

  componentDidMount = () => {
    console.log('Component Mounted')
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios.get('/api/v1/users').then(response => {
      this.setState({ users: response.data })
    })
  }

  render() {
    return (
      <UsersContainer>
        <h1>Select your journey!</h1>
        <div className="user-flex">
          {this.state.users.map((user) => {
            return (<div className="user-container"><Link className="user-link waves-effect waves-light btn-large" key={user._id} to={`/users/${user._id}`}><i class="material-icons left">flight_takeoff</i>{user.name}</Link></div>)
          })}
        </div>
      </UsersContainer>
    )
  }
}
