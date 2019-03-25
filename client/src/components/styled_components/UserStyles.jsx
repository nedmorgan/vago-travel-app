import styled, { keyframes } from 'styled-components'
import { fadeInDown } from 'react-animations'

export const fadeIn = keyframes`${fadeInDown}`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  flex: 1;
  
  h1, h3 {
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
    text-align: center;
  }

  h1 {
    text-decoration: underline;
    font-size: 7vw;
  }

  h3 {
    font-size: 5vw;
  }

  .country-flex {
    display: flex;
    flex-wrap: wrap;
    width: 95vw;
  }

  .form-container {
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: .5s ${fadeIn};
  }

  .row {
    width: 100%;
  }

  .input-container {
    margin-bottom: 1vw;
  }

  .delete-user {
    margin-top: 4vw;
  }

  .add-country {
    margin-left: 1vw;
    margin-bottom: 1vw;
  }

  .add-country-button {
    margin-bottom: 2vw;
  }

  .user-info-flex {
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .inputs {
    color: whitesmoke;
  }

  select {
    display: initial;
  }

  .drop-icon {
    color: whitesmoke;
    display: contents;
    cursor: pointer;
  }

  @media (max-width: 768px) {
   .user-info-flex {
     width: 90vw;
     flex-wrap: wrap;
   } 
`