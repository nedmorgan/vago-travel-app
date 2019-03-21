import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
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
    createdUser: {},
    isSignedIn: false,
    redirectToUserPage: false,
  }

  createUser = () => {
    axios.post('/api/v1/user', {
      user: this.state.user
    }).then((res) => {
      this.setState({ redirectToHome: true, isSignedIn: true, createdUser: res.data })
    })
  }

  handleChange = (e) => {
    const user = { ...this.state.user }
    user[e.target.name] = e.target.value
    this.setState({ user })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    this.createUser()
  }

  render() {
    if (this.state.redirecttoUserPage) {
      return (<Redirect to={`/user/${this.state.createdUser._id}`} />)
    }
    return (
      <LogInContainer>
        <h1>Get Started On Your Journey!</h1>
        <form className="form-container col s12" onSubmit={this.handleSignUp}>
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="name">User Name</label>
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.user.name}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                value={this.state.user.password}
              />
            </div>
          </div>
          <button className="waves-effect waves-light btn">Sign Up</button>
        </form>
      </LogInContainer>
    )
  }
}
