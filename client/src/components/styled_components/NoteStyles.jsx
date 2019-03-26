import styled, { keyframes } from 'styled-components'

export const NoteContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 5vw;

  .note-title {
    text-align: center;
    margin: 0;
    margin-bottom: .5vw;
  }

  .middle-div
  .input-field {
    margin-bottom: .5vw !important;
  }

  .note-body, 
  .note-label,
  .note-title
  .note-button {
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
  }

  .note-button {
    border: 2px solid whitesmoke;
    border-radius: 5%;
    background: none;
    color: whitesmoke;
  }

  .add-icon {
    line-height: 35px;
    margin-right: 10px;
    color: whitesmoke;
  }

  .add-icon:hover {
    cursor: pointer;
  }



  .title-input {
    padding: 0;
    margin-bottom: 0;
  }

  .drop-icon {
    color: whitesmoke;
  }

  .drop-icon:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    input {
      width: 35vw !important;
    }
  }

  @media (max-width: 768px) {
  .row {
    right: 5vw;
  }
}
`