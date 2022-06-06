import React, { Component } from 'react'

class FormCadastro extends Component {
  constructor(props) {
    super(props)
    this.title = ""
    this.text = ""
    this.category = "No category"
  }
  _handleChangeCategory(event) {
    event.stopPropagation()
    this.category = event.target.value
  }
  _handleChangeTitle(event) {
    event.stopPropagation()
    this.title = event.target.value
  }
  _handleChangeText(event) {
    event.stopPropagation()
    this.text = event.target.value
  }
  _createNote(event) {
    event.preventDefault()
    event.stopPropagation()
    this.props.createNote(this.title, this.text, this.category)
  }

  render() {
    return (
      <form
        onSubmit={this._createNote.bind(this)}
      >
        <select onChange={this._handleChangeCategory.bind(this)}>
          <option defaultValue>Sem categoria</option>
          {this.props.categories.map((category) => {
            return (
              <option>{category}</option>
            )
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          onChange={this._handleChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota"
          onChange={this._handleChangeText.bind(this)}
        />
        <button>Criar Nota</button>
      </form>
    );
  }
}
export default FormCadastro;