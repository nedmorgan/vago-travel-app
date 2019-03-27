import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { CountryContainer } from './styled_components/CountryStyles'
import Note from './Note'

export default class Country extends Component {
  state = {
    country: {},
    isLoading: true,
    redirectToUser: false,
    user: {},
    notes: [],
  }

  getSpecificCountryName = () => {
    return axios.get(`/api/v1/users/${this.props.match.params.userId}/countries/${this.props.match.params.countryId}`).then(response => {
      return response.data[0].name.toLowerCase()
    })
  }

  getCountryNote = () => {
    return axios.get(`/api/v1/users/${this.props.match.params.userId}/countries/${this.props.match.params.countryId}`).then(response => {
      this.setState({ notes: response.data[0].note })
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
    this.getCountryNote()
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
              <h1><a className="title-link" href={`https://wikitravel.org/en/${this.state.country.name}`} target="_blank" rel="noopener noreferrer">{this.state.country.name}</a><a onClick={this.addCountryToFavorites}><i class=" fav-icon far fa-heart"></i></a></h1>
              <div className="country-body">
                <h3 className="country-info-title">Introduction: </h3>
                <p>{this.state.country.introduction.background}</p>
                <div className="note-flex-container">
                  <Note
                    notes={this.state.notes}
                  />
                </div>
                <h3 className="country-info-title">Capital City: </h3>
                <p className="capital-city">{this.state.country.government.capital.name}</p>
                <h3 className="country-info-title">Languages: </h3>
                <ul className="circle-list">
                  {
                    this.state.country.people.languages.language.map((lang) => {
                      return (<li className="list-items"><a className="language-link" href={`https://translate.google.com/#view=home&op=translate&sl=en&tl=en`} target="_blank" rel="noopener noreferrer">{lang.name}</a></li>)
                    })
                  }
                </ul>
                <h3 className="country-info-title">Major Urban Areas: </h3>
                <ul>
                  {
                    this.state.country.people.major_urban_areas.places.map((place) => {
                      return (<li>
                        <h5><a className="city-link" href={`https://wikitravel.org/en/${place.place}`} target="_blank" rel="noopener noreferrer">{place.place}</a></h5>
                        <p className="population">Population: {place.population}</p>
                      </li>)
                    })
                  }
                </ul>
                <h3 className="country-info-title">Climate: </h3>
                <p>{this.state.country.geography.climate.charAt(0).toUpperCase() + this.state.country.geography.climate.slice(1)}</p>
                <h3 className="country-info-title">Environmental Issues: </h3>
                <ul className="circle-list">
                  {
                    this.state.country.geography.environment.current_issues.map((issue) => {
                      return (
                        <li className="environment-issue list-items">{issue.charAt(0).toUpperCase() + issue.slice(1)}</li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className="button-div">
                <button className="country-buttons delete-user waves-effect waves-light btn red" onClick={this.deleteCountry}>Delete Country</button>
                <a href="https://www.google.com/flights/" target="_blank" rel="noopener noreferrer" className="country-buttons waves-effect waves-light btn"><i class="material-icons">flight</i></a>
              </div>
            </React.Fragment>
        }
      </CountryContainer>
    )
  }
}
