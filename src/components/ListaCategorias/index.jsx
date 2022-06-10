import React, { Component } from 'react';

class ListaCategorias extends Component {
  constructor() {
    super()
    this.state = {
      categories: []
    }
    this.newCategories = this.newCategories.bind(this)
  }

  componentDidMount() {
    this.props.categories.subscribe(this.newCategories)
  }

  componentWillUnmount() {
    this.props.categories.unsubscribe(this.newCategories)
  }

  newCategories(categories) {
    this.setState({ ...this.state, categories })
  }

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
          {this.props.categories.categories.map((category, index) => {
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