import React, { Component } from 'react'
import { NoteContainer } from './styled_components/NoteStyles'

export default class Note extends Component {

  state = {
    displayNoteForm: false,
    note: {
      title: '',
      description: '',
    },
    currentUser: {}
  }

  toggleNotesForm = () => {
    this.setState((state, props) => {
      return ({ displayNoteForm: !state.displayNoteForm })
    })
  }

  handleChange = (e) => {
    const note = { ...this.state.note }
    note[e.target.name] = e.target.value
    this.setState({ note })
  }

  handleSignUp = (e, note) => {
    e.preventDefault()
    this.props.addTravelTip(note)
    this.setState({ displayNoteForm: false, note: {} })
  }

  render() {
    return (
      <NoteContainer className="row">
        <div className="title-container">
          <h3 className="note-header"><a onClick={this.toggleNotesForm}><i className="add-icon small material-icons left">add</i></a>Travel Tips:</h3>
        </div>
        {
          this.state.displayNoteForm ?
            <form className="col s12" onSubmit={(e) => this.handleSignUp(e, this.state.note)}>
              <div className="title-input input-field col s12">
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="tip-title validate"
                  onChange={this.handleChange}
                  value={this.state.note.title}></input>
                <label htmlFor="title">Tip Title</label>
              </div>
              <div className="middle-div row">
                <div className="input-field col s12">
                  <textarea
                    id="textarea1"
                    name="description"
                    className="note-body materialize-textarea"
                    onChange={this.handleChange}
                    value={this.state.note.description}></textarea>
                  <label htmlFor="title">Description</label>
                </div>
              </div>
              <button className="note-button">Add Note</button>
            </form>
            :
            this.props.notes.map((note, i) => {
              return (
                <div key={i} className="note-contents">
                  <h5 className="note-title">{note.title}</h5>
                  <p className="note-body">{note.description}</p>
                  <div className="delete-div">
                    <a onClick={(e) => this.props.removeTravelTip(e, note._id)}><i className="delete-icon material-icons">delete</i></a>
                  </div>
                </div>
              )
            })
        }
      </NoteContainer>
    )
  }
}
