import { Component } from "react";
import FormCadastro from "./components/FormCadastro";
import ListaNotas from "./components/ListaNotas";
import ListaCategorias from "./components/ListaCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categories from "./data/categories";
import ListNotes from "./data/notes";

class App extends Component {

  constructor() {
    super()
    this.categories = new Categories()
    this.notes = new ListNotes()
  }

  render() {
    return (
      <section className="content">
        <FormCadastro
          categories={this.categories}
          createNote={this.notes.addNote.bind(this.notes)}
        />
        <main className="main-content">
          <ListaCategorias
            addCategory={this.categories.addCategory.bind(this.categories)}
            categories={this.categories}
          />
          <ListaNotas
            notas={this.notes.notes}
            deleteNote={this.notes.deleteNote.bind(this.notes)}
          />
        </main>
      </section>
    );
  }
}

export default App;
