import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { UsersContainer } from './styled_components/UsersStyles'

export default class Users extends Component {

  componentDidMount = () => {
    console.log('Component Mounted')
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios.get('/api/v1/users').then(response => {
      console.log(response)
      this.setState({ users: response.data })
    })
  }

  state = {
    users: []
  }
  render() {
    return (
      <UsersContainer>
        <h1>Test</h1>
      </UsersContainer>
    )
  }
}
