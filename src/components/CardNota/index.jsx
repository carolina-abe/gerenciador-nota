import React, { Component } from 'react';
import { Card } from './styles';

class CardNota extends Component {
  render() {
    return (
      <Card>
        <header>
          <h1>Título</h1>
        </header>
        <p>Escreva sua nota</p>
      </Card>
    );
  }
}

export default CardNota;