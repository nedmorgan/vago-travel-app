import React, { Component } from 'react'
import { NoteContainer } from './styled_components/NoteStyles'

export default class Note extends Component {

  state = {
    displayNoteForm: false,
  }

  toggleNotesForm = () => {
    this.setState((state, props) => {
      return ({ displayNoteForm: !state.displayNoteForm })
    })
  }

  render() {
    return (
      <NoteContainer className="row">
        <div className="title-container">
          <h3 className="note-header"><a onClick={this.toggleNotesForm}><i class="add-icon small material-icons left">add</i></a>Notes:</h3>
        </div>
        {
          this.state.displayNoteForm ?
            <form className="col s12">
              <div className="title-input input-field col s12">
                <input id="title" name="title" type="text" className="validate"></input>
                <label for="title">Title</label>
              </div>
              <div className="middle-div row">
                <div className="input-field col s12">
                  <textarea id="textarea1" name="description" className="note-body materialize-textarea"></textarea>
                  <label for="title">Description</label>
                </div>
              </div>
              <button className="note-button">Add Note</button>
            </form>
            :
            this.props.notes.map((note) => {
              return (
                <div className="note-container">
                  <h5 className="note-title">{note.title}</h5>
                  <p className="note-body">{note.description}</p>
                  <a><i class="delete-icon material-icons">delete</i></a>
                </div>
              )
            })
        }
      </NoteContainer>
    )
  }
}
