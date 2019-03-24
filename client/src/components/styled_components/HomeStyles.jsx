import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  flex: 1;

  h1, h2, .signup-link {
    font-family: 'Lato', sans-serif;
    text-align: center;
    color: whitesmoke;
  }

  .signup-link {
    margin-top: 2vw;
  }
`