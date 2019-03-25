import styled, { keyframes } from 'styled-components'
import { fadeInDown, fadeInUp, lightSpeedOut } from 'react-animations'

export const fadeIn = keyframes`${fadeInDown}`
export const fadeUp = keyframes`${fadeInUp}`
export const fly = keyframes`${lightSpeedOut}`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  flex: 1;

h1, h2 {
  animation: 2s ${fadeIn};
}

  .airplane {
  color: whitesmoke;
  font-size: 3vw;
  left: -200px;
  right: 600px;
  animation: 5s ${fly};
}

  .airplane-div {
  position: absolute;
  width: 1000px;
}

h1, h2, .signup-link {
  font-family: 'Lato', sans-serif;
  text-align: center;
  color: whitesmoke;
}

  .signup-link {
  margin-top: 2vw;
  animation: 2s ${ fadeUp};
}
`