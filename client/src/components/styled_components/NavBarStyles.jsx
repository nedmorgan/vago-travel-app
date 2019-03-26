import styled from 'styled-components'

export const NavContainer = styled.div`
  position: static;
  margin-top: 2vw;
  display: flex;
  justify-content: space-between;
  background-color: #fafafa;
  margin: 0;
  border-bottom: 1px solid black;

  div {
    display: flex;
    justify-content: center;
    margin-top: 1vw;
    margin-bottom: 1.5vw;
  }

  h1 {
    margin: 0;
    font-size: 6vw;
    font-family: 'Satisfy', cursive;
  }

  .user-link {
    margin-top: 3vw;
    font-size: 3vw;
    font-family: 'Lato', sans-serif;
    margin-right: 3vw;
  }

  i {
    font-size: 6vw;
    margin-left: 1.5vw;
    margin-top: 1vw;
  }

  .home-link {
    color: black;
    margin-left: 3vw;
  }
`