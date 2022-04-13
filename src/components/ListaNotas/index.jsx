import React, { Component } from "react";
import CardNota from "../CardNota";

class ListaNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Estudos").map((categoria, index) => {
          return (
          <li key={index}>
            
            <CardNota />
          </li>)
        })}
      </ul>
    );
  }
}

export default ListaNotas