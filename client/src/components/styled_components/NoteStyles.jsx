import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

export const fade = keyframes`${fadeIn}`

export const NoteContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  right: 5vw;

  form {
    animation: 1s ${fade};
  }

  .note-header {
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
    border-radius: 5px;
    background: none;
    color: whitesmoke;
  }

  .note-button:hover {
    color: #149CEA;
    cursor: pointer;
    border: 2px solid #149CEA;
  }

  .hide-button {
    display: none;
  }

  .add-icon {
    line-height: 35px;
    margin-right: .25vw;
    color: whitesmoke;
  }

  .note-title, 
  .note-body,
  input {
    color: whitesmoke;
    font-family: 'Lato', sans-serif;
  }

  .note-body {
    margin-bottom: .5vw;
  }

  .note-title {
    margin-bottom: 1vw;
  }

  .delete-icon {
    color: whitesmoke;
  }

  .delete-icon:hover {
    cursor: pointer;
    color: tomato;
  }

  .add-icon:hover {
    cursor: pointer;
    color: #149CEA;
  }

.title-container {
  width: 40vw;
  display: flex;
  justify-content: center;
}

.note-contents {
  display: flex;
  flex-direction: column;
  width: 40vw;
  align-items: flex-start;
  margin-top: 2vw;
  border: 2px solid whitesmoke;
  border-radius: 15px;
  padding: 1vw;
  animation: 1s ${fade};
}

.delete-div {
  width: 40vw;
  display: flex;
  justify-content: center;
}

  .title-input {
    padding: 0;
    margin-bottom: 0;
  }

  .drop-icon {
    color: whitesmoke;
    display: contents;
  }

  .drop-icon:hover {
    cursor: pointer;
    color: #0095ff;
  }

  .row, .col {
    float: none !important;
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

  .add-icon {
    font-size: 15px;
    line-height: 17px;
    margin-right: 2px;
  }

  .delete-icon {
    font-size: 12px;
  }
}

@media (max-width: 1024px) {
  .row {
    right: 5vw;
  }

  .add-icon {
    font-size: 25px;
    line-height: 30px;
    margin-right: 2px;
  }

  .delete-icon {
    font-size: 25px;
  }

  .note-body {
    font-size: 1.25em;
  }
}
`