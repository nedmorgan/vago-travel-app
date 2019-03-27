import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { UserContainer } from './styled_components/UserStyles'
import CountriesList from './CountriesList'
import FavoritesList from './FavoritesList'

export default class User extends Component {
  state = {
    user: {
      countries: [],
      favorites: [],
    },
    countryNames: [],
    redirectToUsers: false,
    displayUserEditForm: false,
    displayCountryAddForm: false,
    displayCountriesList: false,
    displayFavoritesList: false,
    newCountry: {}
  }

  componentDidMount = () => {
    this.getUser()
    this.getCountries()
  }

  getCountries = () => {
    axios.get('/country-data/countries').then(response => {
      this.setState({ countryNames: response.data })
    })
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

  toggleCountriesList = () => {
    this.setState((state, props) => {
      return ({ displayCountriesList: !state.displayCountriesList })
    })
  }

  toggleFavoritesList = () => {
    this.setState((state, props) => {
      return ({ displayFavoritesList: !state.displayFavoritesList })
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
          <h3><a onClick={this.toggleCountriesList}><i class="drop-icon small material-icons left">arrow_drop_down</i></a>Countries<a onClick={this.toggleCountryAddForm} className="add-country btn-floating btn-small waves-effect waves-light red"><i className="material-icons">add</i></a></h3>
          {
            this.state.displayCountryAddForm ?
              <form className="form-container col s12" onSubmit={this.addCountry}>
                <div className="input-container row">
                  <label className="inputs" htmlFor="name">Country Name</label>
                  <select
                    name="name"
                    id="name"
                    onChange={this.handleCountryChange}>
                    <option>Select a Country</option>
                    {
                      this.state.countryNames.map(name => {
                        const regex = /_/g
                        return <option value={name}>{name.toUpperCase().replace(regex, " ")}</option>
                      })
                    }
                  </select>
                </div>
                <button className="add-country-button waves-effect waves-light btn">Add Country</button>
              </form>
              : null
          }
          {
            this.state.displayCountriesList ?
              <div className="country-flex">
                <CountriesList
                  user={this.state.user}
                  deleteCountry={this.deleteCountry}
                />
              </div>
              : null
          }
          <h3><a onClick={this.toggleFavoritesList}><i className="drop-icon small material-icons left">arrow_drop_down</i></a>Favorites</h3>
          {
            this.state.displayFavoritesList ?
              <div className="country-flex">
                <FavoritesList
                  user={this.state.user}
                />
              </div>
              : null
          }
        </div>
        <button className="delete-user waves-effect waves-light btn red" onClick={this.deleteUser}>Delete User</button>
      </UserContainer>
    )
  }
}
