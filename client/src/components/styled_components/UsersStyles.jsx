import styled, { keyframes } from 'styled-components'
import { flipInX } from 'react-animations'

export const rotate = keyframes`${flipInX}`

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  flex: 1;
  animation: 1s ${rotate};

  .user-flex {
    display: flex;
    justify-content: space-evenly;
  }

  .user-link {
    margin: 1vw;
  }

  h1 {
    font-family: 'Lato', sans-serif;
    text-align: center;
    color: whitesmoke;
  }
`