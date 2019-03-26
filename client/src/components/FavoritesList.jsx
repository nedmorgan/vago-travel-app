import React, { Component } from 'react'
import { FavoritesListContainer } from './styled_components/FavoriteListStyles'
import { Link } from 'react-router-dom'

export default class FavoritesList extends Component {
  render() {
    return (
      <FavoritesListContainer>
        {
          this.props.user.favorites.map(country => {
            const regex = /_/g
            return (
              <div>
                <Link className="country-button waves-effect waves-light btn-large" key={country._id} to={`/users/${this.props.user._id}/countries/${country._id}`}>
                  {country.name.toUpperCase().replace(regex, " ")}
                </Link>
              </div>
            )
          })
        }
      </FavoritesListContainer>
    )
  }
}
