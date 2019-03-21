import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid black;
  background-color: #fafafa;
  position: fixed;
  bottom: 0;
  width: 100%;

  footer {
    margin-top: 1.5vw;
    margin-bottom: 1.5vw;
  }

  div, a {
    font-family: 'Lato', sans-serif;
  }
`