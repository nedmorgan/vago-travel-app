import styled from 'styled-components'

export const CountryListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95vw;

  .country-button {
    margin: 1vw;
  }

  .remove-button {
    margin-left: -3vw;
    margin-bottom: 2vw;
    position: absolute;
  }

  @media (max-width: 768px) {
   .remove-button {
     margin-left: -7vw;
   } 
  }
`