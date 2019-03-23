import styled from 'styled-components'

export const CountryContainer = styled.div`
  h1 {
    text-align: center;
    text-decoration: underline;
  }

  h1, h3, p {
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
  }

  p {
    overflow: hidden; 
    word-wrap: break-word; 
    text-overflow: ellipsis;
  }

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