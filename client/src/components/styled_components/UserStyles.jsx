import styled from 'styled-components'

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
  }

  .country-flex {
    display: flex;
    flex-wrap: wrap;
    width: 75vw;
  }

  .form-container {
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
`