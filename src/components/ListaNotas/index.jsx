import React, { Component } from "react";
import CardNota from "../CardNota";

class ListaNotas extends Component {
  constructor(){
    super()
    this.state = {
      notes: []
    }
    this.newNotes = this.newNotes.bind(this)
  }
  componentDidMount() {
    this.props.notes.subscribe(this.newNotes);
  }
componentWillUnmount() {
    this.props.notes.unsubscribe(this.newNotes);
}
  newNotes(notes) {
    this.setState({ ...this.state, notes });
  }
  render() {
    return (
      <ul>
        {this.state.notes.map((note, index) => {
          return (
            <li key={index}>
              <CardNota
                index={index}
                title={note.title}
                text={note.text}
                deleteNote={this.props.deleteNote}
                category={note.category}
              />
            </li>)
        })}
      </ul>
    );
  }
}

export default ListaNotas