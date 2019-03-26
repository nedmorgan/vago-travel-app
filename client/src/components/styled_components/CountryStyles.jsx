import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

export const fade = keyframes`${fadeIn}`

export const CountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  flex: 1;
  animation: 1s ${fade};
  
  .back-link {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }

  h1 {
    text-align: center;
    text-decoration: underline;
    font-size: 6vw;
    margin: 0;
    margin-top: 3.5vw;
    margin-bottom: 2vw;
  }

  .title-link {
    font-family: 'BioRhyme', serif;
  }

  h3 {
    font-size: 3.5vw;
    text-decoration: underline;
  }

  h1, h3, p {
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
  }

  h5 {
    color: whitesmoke;
    font-size: 2.5vw;
    margin: 0;
    text-decoration: underline;
  }

  .user-back {
    margin-top: 1vw;
    margin-left: 1vw;
  }

  .country-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90vw;
  }

  .country-info-title {
    margin: 0;
    margin-bottom: 1vw;
  }

  .capital-city {
    font-size: 2.5vw;
    font-weight: bold;
  }
  
  .city-link,
  .language-link,
  .title-link {
    color: whitesmoke;
  }

  .city-link:hover,
  .language-link:hover,
  .title-link:hover {
    color: #149CEA;
  }

  .population {
    margin-bottom: .5vw;
  }

  p {
    margin: 0;
    margin-bottom: 2vw;
    font-size: 1.5vw;
  }

  .list-items {
    color: whitesmoke;
    font-family: 'Lato', sans-serif;
    font-size: 2.5vw;
    list-style-type: circle;
  }

  ul {
    margin: 0;
    margin-bottom: 1.5vw;
  }

  .fav-icon {
    font-size: 5vw;
    color: tomato;
    margin-left: 2vw;
  }

  .fav-icon:hover {
    cursor: pointer;
  }

  .country-buttons {
    margin: 1vw;
  }

  @media (min-width: 768px) {
   h1 {
     font-size: 4em;
   }

   h3 {
     font-size: 2em;
   }

   h5 {
     font-size: 1.5em;
   }

   .language {
     font-size: 1em;
   }

   .list-items {
     font-size: 1.3em;
   }
}

  @media (max-width: 768px) {
    .circle-list {
    margin-left: 4vw !important;
  }

  p {
    font-size: .5em;
  }
}
`