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
  }

  h1, h3, p {
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
  }

  /* p {
    width: 250px;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
  } */

  .user-back {
    margin-top: 1vw;
    margin-left: 1vw;
  }

  .fav-icon {
    font-size: 5vw;
    color: tomato;
    margin-left: 2vw;
  }

  .fav-icon:hover {
    cursor: pointer;
  }

`