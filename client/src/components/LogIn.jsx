import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
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
    hideButton: true,
  }

  createUser = () => {
    axios.post('/api/v1/users', {
      user: this.state.user
    }).then((res) => {
      this.setState({ redirectToUserPage: true, isSignedIn: true, createdUser: res.data })
    })
  }

  showButton = () => {
    let userName = this.state.user.name
    let userPass = this.state.user.password
    if (userName !== '' && userPass !== '') {
      this.setState({ hideButton: false })
    } else {
      this.setState({ hideButton: true })
      return
    }
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
    if (this.state.redirectToUserPage) {
      return (<Redirect to={`/users/${this.state.createdUser._id}`} />)
    }
    return (
      <LogInContainer>
        <h1>Get Started On Your Journey!</h1>
        <form className="form-container col s12" onSubmit={this.handleSignUp}>
          <div className="row">
            <div className="input-field col s6">
              <label className="inputs" htmlFor="name">User Name</label>
              <input
                className="inputs"
                id="name"
                type="text"
                name="name"
                onKeyUp={this.showButton}
                onChange={this.handleChange}
                value={this.state.user.name}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <label className="inputs" htmlFor="password">Password</label>
              <input
                className="inputs"
                id="password"
                type="password"
                name="password"
                onKeyUp={this.showButton}
                onChange={this.handleChange}
                value={this.state.user.password}
              />
            </div>
          </div>
          <button className={`waves-effect waves-light btn ${this.state.hideButton ? 'hide-button' : null}`}>Sign Up</button>
        </form>
      </LogInContainer>
    )
  }
}
