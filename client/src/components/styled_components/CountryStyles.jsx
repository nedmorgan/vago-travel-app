import styled from 'styled-components'

export const CountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  flex: 1;
  

  .back-link {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }

  h1 {
    text-align: center;
    text-decoration: underline;
    font-size: 6vw;
  }

  h3 {
    font-size: 4vw;
  }

  h1, h3, p {
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
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

  p {
    margin: 0;
    margin-bottom: 2vw;
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

`