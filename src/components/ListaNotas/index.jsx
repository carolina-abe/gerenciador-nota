import React, { Component } from "react";
import CardNota from "../CardNota";

class ListaNotas extends Component {
  render() {
    return (
      <ul>
        {this.props.notes.map((note, index) => {
          return (
            <li key={index}>
              <CardNota
                index={index}
                title={note.title}
                text={note.text}
                deleteNote={this.props.deleteNote}
              />
            </li>)
        })}
      </ul>
    );
  }
}

export default ListaNotas