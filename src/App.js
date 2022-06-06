import { Component } from "react";
import FormCadastro from "./components/FormCadastro";
import ListaNotas from "./components/ListaNotas";
import ListaCategorias from "./components/ListaCategorias";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {

  constructor() {
    super()
    this.state = {
      notes: [],
      categories: []
    }
  }
  createNote(title, text, category) {
    const newNote = { title, text, category }
    const newArrayNotes = [...this.setState.notes, newNote]
    const newState = {
      notes: newArrayNotes
    }
    this.setState(newState)
  }

  addCategory(categoryName) {
    const newArrayCategories = [...this.state.categories, categoryName]
    const newState = {...this.state, categories: newArrayCategories}
    this.setState(newState)
  }

  deleteNote(index) {
    let arrayNotes = this.state.notes
    arrayNotes.splice(index, 1)
    this.state({ notes: arrayNotes })
  }

  render() {
    return (
      <section className="content">
        <FormCadastro 
          categories={this.state.categories}
          createNote={this.createNote.bind(this)} 
        />
        <main className="main-content">
          <ListaCategorias
            addCategory={this.addCategorybind(this)}
            categories={this.state.categories}
          />
          <ListaNotas
            notas={this.state.notes}
            deleteNote={this.deleteNote.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
