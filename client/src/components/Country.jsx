import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { CountryContainer } from './styled_components/CountryStyles'

export default class Country extends Component {
  state = {
    country: {},
    isLoading: true,
    redirectToUser: false,
    user: {},
  }

  getSpecificCountryName = () => {
    return axios.get(`/api/v1/users/${this.props.match.params.userId}/countries/${this.props.match.params.countryId}`).then(response => {
      return response.data[0].name.toLowerCase()
    })
  }

  getUser = () => {
    axios.get(`/api/v1/users/${this.props.match.params.userId}`).then(response => {
      this.setState({ user: response.data })
    })
  }

  componentDidMount = () => {
    this.setState({ isLoading: true })
    this.getUser()
    this.getSpecificCountryName().then(response => {
      axios.get(`/country-data/country/${response}`).then(response => {
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
              <div className="back-link">
                <Link className="user-back waves-effect waves-light btn-small" to={`/users/${this.props.match.params.userId}`}>Back to {this.state.user.name}'s Profile</Link>
              </div>
              <h1>{this.state.country.name}<a onClick={this.addCountryToFavorites}><i class=" fav-icon fas fa-heart"></i></a></h1>
              <div className="country-body">
                <h3 className="country-info-title">Introduction: </h3>
                <p>{this.state.country.introduction.background}</p>
                <h3 className="country-info-title">Capital City: </h3>
                <p className="capital-city"><a className="capital-link" href={`https://en.wikipedia.org/wiki/${this.state.country.government.capital.name}`} target="_blank">{this.state.country.government.capital.name}</a></p>
                <h3 className="country-info-title">Climate: </h3>
                <p>{this.state.country.geography.climate.charAt(0).toUpperCase() + this.state.country.geography.climate.slice(1)}</p>
                <h3 className="country-info-title">Languages: </h3>
                <ul>
                  {
                    this.state.country.people.languages.language.map((lang) => {
                      return (<li className="language">{lang.name}</li>)
                    })
                  }
                </ul>
              </div>
              <div className="button-div">
                <button className="country-buttons delete-user waves-effect waves-light btn red" onClick={this.deleteCountry}>Delete Country</button>
                <a href="https://www.google.com/flights/" target="_blank" className="country-buttons waves-effect waves-light btn"><i class="material-icons">flight</i></a>
              </div>
            </React.Fragment>
        }
      </CountryContainer>
    )
  }
}
