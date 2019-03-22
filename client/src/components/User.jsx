import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { UserContainer } from './styled_components/UserStyles'

export default class User extends Component {
  state = {
    user: {},
  }

  componentDidMount = () => {
    axios.get(`/api/v1/users/${this.props.match.params.userId}`).then(response => {
      console.log(response.data)
      this.setState({ user: response.data })
      console.log(this.state.user)
    })
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    )
  }
}
