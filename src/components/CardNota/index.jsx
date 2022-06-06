import React, { Component } from 'react';
import { Card } from './styles';
import { ReactComponent as DeleteSVG } from '../../assets/img/icon-delete.svg'

class CardNota extends Component {
  delete(){
    const index = this.props.index
    this.props.deleteNote(index)
  }
  render() {
    return (
      <Card>
        <header>
          <h1>{this.props.title}</h1>
        </header>
        <p>{this.props.text}</p>
        <DeleteSVG onClick={this.delete.bind(this)}/>
      </Card>
    );
  }
}

export default CardNota;