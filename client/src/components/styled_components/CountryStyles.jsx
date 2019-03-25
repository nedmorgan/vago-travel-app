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
    margin: 0;
    margin-top: 3.5vw;
    margin-bottom: 2vw;
  }

  h3 {
    font-size: 3.5vw;
    text-decoration: underline;
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
  
  .capital-link {
    color: whitesmoke;
  }

  .capital-link:hover{
    color: #149CEA;
  }

  p {
    margin: 0;
    margin-bottom: 2vw;
    font-size: 2vw;
  }

  .list-items {
    color: whitesmoke;
    font-family: 'Lato', sans-serif;
    font-size: 3vw;
  }

  .environment-issue {
    list-style-type: circle;
  }

  ul {
    margin: 0;
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

   p {
     font-size: 1em;
   }

   .language {
     font-size: 1em;
   }

   .list-items {
     font-size: 1em;
   }

`