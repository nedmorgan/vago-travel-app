import styled, { keyframes } from 'styled-components'
import { fadeInDown } from 'react-animations'


export const fadeIn = keyframes`${fadeInDown}`

export const FavoritesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95vw;
  animation: .5s ${fadeIn};

  .country-button {
    margin: 1vw;
  }
`