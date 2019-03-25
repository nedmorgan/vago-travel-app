import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

export const fade = keyframes`${fadeIn}`

export const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  flex: 1;
  animation: 1s ${fade};
  
  h1 {
    text-align: center;
    font-size: 6vw;
    color: whitesmoke;
    font-family: 'BioRhyme', serif;
  }

  .form-container {
    margin-left: 2vw;
    width: 50%;
  }

  .input-field {
    width: 100% !important;
  }

  .inputs {
    color: whitesmoke;
  }
`