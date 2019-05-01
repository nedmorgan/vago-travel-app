import styled, { keyframes } from 'styled-components'
import { fadeInDown, fadeInUp } from 'react-animations'

export const fadeIn = keyframes`${fadeInDown}`
export const fadeUp = keyframes`${fadeInUp}`
export const fly = keyframes`
  0% {
    transform: translate(0, 0);    
  }
  100% {
    transform: translate(110vw, -50vw);
  }
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  flex: 1;
  width: 100vw;

h1, h2 {
  animation: 2s ${fadeIn};
}

  .airplane {
  color: whitesmoke;
  font-size: 3vw;
  animation: 5s ${fly};
}

  .airplane-div {
  position: absolute;
  width: 100vw;
  bottom: 0;
}

h1, h2 {
  font-family: 'BioRhyme', serif;
}

h1, h2, .signup-link {
  text-align: center;
  color: whitesmoke;
}

  .signup-link {
  font-family: 'Lato', sans-serif;
  margin-top: 2vw;
  animation: 2s ${ fadeUp};
}

@media (max-width: 768px) {
   h1 {
     font-size: 3em;
   }

   h2 {
     font-size: 2em;
   }

   .airplane-div {
     bottom: 90vw;
     left: -10vw;
   }
}

@media (max-width: 1024px) {
   h1 {
     font-size: 4.25em;
     margin-top: 2.5em;
   }

   h2 {
     font-size: 2.15em;
   }

   .airplane-div {
     bottom: 70vw;
     left: -10vw;
   }
}

`