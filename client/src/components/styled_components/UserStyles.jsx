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
  }

  .country-flex {
    display: flex;
  }

  .country-button {
    margin: 1vw;
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
`