import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { CountryContainer } from './styled_components/CountryStyles'

export default class Country extends Component {
  state = {
    countries: [],
    country: {
      name: '',
      description: '',
    }
  }

  componentDidMount = () => {
    axios.get('https://raw.githubusercontent.com/iancoleman/cia_world_factbook_api/master/data/factbook.json').then(response => {
      console.log(response.data.countries)
      this.setState({countries: response.data.countries})
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
