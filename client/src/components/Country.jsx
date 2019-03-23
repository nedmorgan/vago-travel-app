import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { CountryContainer } from './styled_components/CountryStyles'

export default class Country extends Component {
  state = {
    countries: [],
    countryToUse: [],
    country: {},
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
      })
    })
  }

  render() {
    return (
      <CountryContainer>
        <h1>{this.state.country.name}</h1>
        {
        }
      </CountryContainer>
    )
  }
}
