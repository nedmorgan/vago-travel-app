import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { CountryContainer } from './styled_components/CountryStyles'

export default class Country extends Component {
  state = {
    country: {},
    isLoading: true,
    redirectToUser: false,
  }

  getSpecificCountryName = () => {
    return axios.get(`/api/v1/users/${this.props.match.params.userId}/countries/${this.props.match.params.countryId}`).then(response => {
      return response.data[0].name.toLowerCase()
    })
  }

  componentDidMount = () => {
    this.getSpecificCountryName().then(response => {
      axios.get(`/country-data/${response}`).then(response => {
        console.log(response)
        this.setState({ country: response.data.data, isLoading: false })
        console.log(this.state.country)
      })
    })
  }

  addCountryToFavorites = () => {
    const userId = this.props.match.params.userId
    const countryId = this.props.match.params.countryId
    axios.post(`/api/v1/users/${userId}/countries/${countryId}`).then((res) => {
      console.log(res)
    })
  }

  deleteCountry = () => {
    const userId = this.props.match.params.userId
    const countryId = this.props.match.params.countryId
    axios.delete(`/api/v1/users/${userId}/countries/${countryId}`)
      .then(res => {
        this.setState({ user: res.data, redirectToUser: true })
      })
  }

  render() {
    if (this.state.redirectToUser) {
      return (<Redirect to={`/users/${this.props.match.params.userId}`} />)
    }
    return (
      <CountryContainer>
        {
          this.state.isLoading ?
            <p>Loading.....</p>
            :
            <React.Fragment>
              <Link className="user-back waves-effect waves-light btn-small" to={`/users/${this.props.match.params.userId}`}>Back to User Profile</Link>
              <h1>{this.state.country.name}<a onClick={this.addCountryToFavorites}><i class=" fav-icon fas fa-heart"></i></a></h1>
              <div>
                <h3>Introduction: </h3>
                <p>{this.state.country.introduction.background}</p>
              </div>
              <button className="delete-user waves-effect waves-light btn red" onClick={this.deleteCountry}>Delete Country</button>
            </React.Fragment>
        }
      </CountryContainer>
    )
  }
}
