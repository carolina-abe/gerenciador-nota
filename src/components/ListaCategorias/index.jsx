import React, { Component } from 'react';

class ListaCategorias extends Component {
  handleInputEvent(e) {
    if (e.key === "Enter") {
      let categoryValue = e.target.value
      this.props.addCategory(categoryValue)
    }
  }

  render() {
    return (
      <section>
        <ul>
          {this.props.categories.map((category, index) => {
            return <li key={index}>{category}</li>
          })}
        </ul>
        <input
          type="text"
          placeholder="Adicionar categoria"
          onKeyUp={this.handleInputEvent.bind(this)}
        />
      </section>
    );
  }
}

export default ListaCategorias;