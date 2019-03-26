import React, { Component } from 'react'
import { CountryListContainer } from './styled_components/CountryListStyles'
import { Link } from 'react-router-dom'

export default class CountriesList extends Component {
  render() {
    return (
      <CountryListContainer>
        {
          this.props.user.countries.map(country => {
            const regex = /_/g
            return (
              <div>
                <Link className="country-button waves-effect waves-light btn-large" key={country._id} to={`/users/${this.props.user._id}/countries/${country._id}`}>
                  {country.name.toUpperCase().replace(regex, " ")}
                </Link>
                <a onClick={(e) => this.props.deleteCountry(e, country._id)} className="remove-button btn-floating btn-small waves-effect waves-light red"><i class="material-icons">clear</i></a>
              </div>
            )
          })
        }
      </CountryListContainer>
    )
  }
}
