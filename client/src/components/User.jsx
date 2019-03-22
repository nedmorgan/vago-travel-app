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
  }

  componentDidMount = () => {
    axios.get(`/api/v1/users/${this.props.match.params.userId}`).then(response => {
      this.setState({ user: response.data, redirectToUsers: false })
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
