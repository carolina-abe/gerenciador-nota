import React, { Component } from 'react';
import { Card } from './styles';

class CardNota extends Component {
  render() {
    return (
      <Card>
        <header>
          <h1>{this.props.title}</h1>
        </header>
        <p>{this.props.text}</p>
      </Card>
    );
  }
}

export default CardNota;