import styled, { keyframes, css } from 'styled-components'
import { fadeInDown } from 'react-animations'

export const fadeIn = keyframes`${fadeInDown}`

export const CountryListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95vw;
  animation: 0.5s ${fadeIn};

  .country-button {
    margin: 1vw;
  }

  .remove-button {
    margin-left: -3vw;
    margin-bottom: 2vw;
    position: absolute;
  }

  @media (max-width: 576px) {
    #remove-btn {
      margin-left: -6vw;
    }

    i {
      line-height: 26px !important;
    }

    .remove-font {
      line-height: 26px;
    }
  }

  @media (max-width: 1024px) {
    .remove-button {
      margin-left: -3.5vw;
      width: 24px;
      height: 24px;
    }

    i {
      line-height: 26px !important;
    }

    .remove-font {
      line-height: 26px;
    }
  }
`
