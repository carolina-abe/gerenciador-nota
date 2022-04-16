import { Component } from "react";
import FormCadastro from "./components/FormCadastro";
import ListaNotas from "./components/ListaNotas";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {

  constructor(){
    super()
    this.state = {
      notes: []
    }
  }
  createNote(title, text){
    const newNote = {title, text}
    const newArrayNotes = [...this.setState.notes, newNote]
    const newState = {
      notes: newArrayNotes
    }
    this.setState(newState)
  }
  
  render(){
    return (
      <section className="content">
        <FormCadastro createNote={this.createNote.bind(this)}/>
        <ListaNotas notas={this.state.notes}/>
      </section>
    );
  }
}

export default App;
