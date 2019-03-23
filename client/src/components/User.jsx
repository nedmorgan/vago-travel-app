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
    displayUserEditForm: false,
    displayCountryAddForm: false,
    newCountry: {}
  }

  componentDidMount = () => {
    this.getUser()
  }

  getUser = () => {
    axios.get(`/api/v1/users/${this.props.match.params.userId}`).then(response => {
      this.setState({ user: response.data, redirectToUsers: false })
    })
  }

  toggleUserEditForm = () => {
    this.setState((state, props) => {
      return ({ displayUserEditForm: !state.displayUserEditForm })
    })
  }

  toggleCountryAddForm = () => {
    this.setState((state, props) => {
      return ({ displayCountryAddForm: !state.displayCountryAddForm })
    })
  }

  handleChange = (e) => {
    const updatedUser = { ...this.state.user }
    updatedUser[e.target.name] = e.target.value
    this.setState({ user: updatedUser })
  }

  handleCountryChange = (e) => {
    const updatedCountry = { ...this.state.newCountry }
    updatedCountry[e.target.name] = e.target.value
    this.setState({ newCountry: updatedCountry })
  }

  updateUser = (e) => {
    e.preventDefault()
    axios.put(`/api/v1/users/${this.state.user._id}`, {
      user: this.state.user
    })
      .then(res => {
        this.setState({ user: res.data, displayUserEditForm: false })
      })
  }

  deleteUser = () => {
    const userId = this.props.match.params.userId
    axios.delete(`/api/v1/users/${userId}`)
      .then(res => {
        this.setState({ user: res.data, redirectToUsers: true })
      })
  }

  deleteCountry = (e, id) => {
    e.preventDefault()
    const userId = this.props.match.params.userId
    axios.delete(`/api/v1/users/${userId}/countries/${id}`)
      .then(res => {
        this.getUser()
      })
  }

  addCountry = (e) => {
    e.preventDefault()
    const userId = this.props.match.params.userId
    const payload = this.state.newCountry
    axios.post(`/api/v1/users/${userId}/countries`, payload).then((res) => {
      this.setState({ displayCountryAddForm: false })
      this.getUser()
    })
  }

  render() {
    if (this.state.redirectToUsers) {
      return (<Redirect to='/users' />)
    }
    return (
      <UserContainer>
        <h1>{this.state.user.name}'s Journey List</h1>
        <button className="waves-effect waves-light btn" onClick={this.toggleUserEditForm}>Edit Your User Information</button>
        {
          this.state.displayUserEditForm ?
            <form className="form-container col s12" onSubmit={this.updateUser}>
              <div className="row">
                <div className="col s6">
                  <label className="inputs" htmlFor="name">User Name</label>
                  <input
                    className="inputs"
                    id="name"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.user.name}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s6">
                  <label className="inputs" htmlFor="password">Password</label>
                  <input
                    className="inputs"
                    id="password"
                    type="text"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.user.password}
                  />
                </div>
              </div>
              <button className="waves-effect waves-light btn">Update</button>
            </form> :
            null
        }
        <div className="user-info-flex">
          <h3>Countries<a onClick={this.toggleCountryAddForm} class="add-country btn-floating btn-small waves-effect waves-light red"><i class="material-icons">add</i></a></h3>
          {
            this.state.displayCountryAddForm ?
              <form className="form-container col s12" onSubmit={this.addCountry}>
                <div className="row">
                  <div className="input-field col s6">
                    <label className="inputs" htmlFor="name">Country Name</label>
                    <input
                      className="inputs"
                      id="name"
                      type="text"
                      name="name"
                      onChange={this.handleCountryChange}
                      value={this.state.newCountry.name}
                    />
                  </div>
                </div>
                <button className="add-country-button waves-effect waves-light btn">Add Country</button>
              </form>
              : null
          }
          <div className="country-flex">
            {
              this.state.user.countries.map(country => {
                return (
                  <div>
                    <Link className="country-button waves-effect waves-light btn-large" key={country._id} to={`/users/${this.state.user._id}/countries/${country._id}`}>
                      {country.name}
                      <button onClick={(e) => this.deleteCountry(e, country._id)}>Delete</button>
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
        <button className="delete-user waves-effect waves-light btn red" onClick={this.deleteUser}>Delete User</button>
      </UserContainer>
    )
  }
}
