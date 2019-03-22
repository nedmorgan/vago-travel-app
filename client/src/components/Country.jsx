import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { CountryContainer } from './styled_components/CountryStyles'

export default class Country extends Component {
  state = {
    countries: [],
    country: {},
  }

  getSpecificCountry = () => {
    axios.get(`/api/v1/users/${this.props.match.params.userId}/countries/${this.props.match.params.countryId}`).then(response => {
      this.setState({ country: response.data[0] })
    })
  }

  componentDidMount = () => {
    this.getSpecificCountry()
    axios.get('https://raw.githubusercontent.com/iancoleman/cia_world_factbook_api/master/data/factbook.json').then(response => {
      this.setState({ countries: response.data.countries })
    })
  }

  render() {
    return (
      <CountryContainer>
        <h1>Country</h1>
      </CountryContainer>
    )
  }
}
