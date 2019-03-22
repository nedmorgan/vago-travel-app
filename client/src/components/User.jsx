import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { UserContainer } from './styled_components/UserStyles'

export default class User extends Component {
  state = {
    user: {
      countries: [],
      favorites: [],
    },
    redirectToUsers: false,
    displayEditForm: false,
  }

  componentDidMount = () => {
    axios.get(`/api/v1/users/${this.props.match.params.userId}`).then(response => {
      this.setState({ user: response.data, redirectToUsers: false })
    })
  }

  toggleEditForm = () => {
    this.setState((state, props) => {
      return ({ displayEditForm: !state.displayEditForm })
    })
  }

  handleChange = (e) => {
    const updatedUser = { ...this.state.user }
    updatedUser[e.target.name] = e.target.value
    this.setState({ user: updatedUser })
  }

  updateUser = (e) => {
    e.preventDefault()
    axios.put(`/api/v1/users/${this.state.user._id}`, {
      user: this.state.user
    })
      .then(res => {
        this.setState({ user: res.data, displayEditForm: false })
      })
  }

  deleteIdea = () => {
    const userId = this.props.match.params.userId
    axios.delete(`/api/v1/users/${userId}`)
      .then(res => {
        this.setState({ user: res.data, redirectToUsers: true })
      })
  }

  render() {
    if (this.state.redirectToUsers) {
      return (<Redirect to='/users' />)
    }
    return (
      <UserContainer>
        <h1>{this.state.user.name}'s Journey List</h1>
        <button onClick={this.toggleEditForm}>Edit Your User Information</button>
        {
          this.state.displayEditForm ?
            <form className="form-container col s12" onSubmit={this.updateUser}>
              <div className="row">
                <div className="col s6">
                  <label htmlFor="name">User Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.user.name}
                  />
                </div>
              </div>
              <button className="waves-effect waves-light btn">Update</button>
            </form> :
            null
        }
        <div className="user-info-flex">
          <h3>Countries</h3>
          <div className="country-flex">
            {
              this.state.user.countries.map(country => {
                return (
                  <div>
                    <Link className="country-button waves-effect waves-light btn-large" key={country._id} to={`/users/${this.state.user._id}/countries/${country._id}`}>
                      {country.name}
                    </Link>
                  </div>
                )
              })
            }
          </div>
          <h3>Favorites</h3>
          <div className="country-flex">
            {
              this.state.user.favorites.map(country => {
                return (
                  <div>
                    <Link className="country-button waves-effect waves-light btn-large" key={country._id} to={`/users/${this.state.user._id}/countries/${country._id}`}>
                      {country.name}
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </UserContainer>
    )
  }
}
