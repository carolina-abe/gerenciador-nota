import { Component } from "react";
import FormCadastro from "./components/FormCadastro";
import ListaNotas from "./components/ListaNotas";

class App extends Component {
  render(){
    return (
      <section>
        <FormCadastro />
        <ListaNotas />
      </section>
    );
  }
}

export default App;
