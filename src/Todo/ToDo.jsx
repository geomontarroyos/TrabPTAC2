import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ToDo() {
    const [lista, setLista] = useState([]);
    const [autor, setautor] = useState("");
    const [genero, setgenero] = useState("");
    const [nomeLivro, setnomeLivro] = useState("");
  
    const salvar = (e) => {
      e.preventDefault();
      setLista([
        ...lista,
        {
          autor: autor,
          genero: genero,
          nomeLivro: nomeLivro,
        },
      ]);
      setId(id + 1);
      setautor ("");
      setgenero("");
      setnomeLivro("");
      console.log(lista)
    };
    const remover = (id) => {
      /*setLista(lista.filter((ativ) => (ativ.id !== id ? lista : null)));*/
      const auxLista = [];
      lista.map((lista) => {
          if (lista.id !== id) {
              auxLista.push(lista);
          }
      });
      setLista(auxLista);
  }
  
    return (
      <div class="container">
      <Link to="/">home</Link>
      <h1>Lista de Livros</h1>
      <form onSubmit={salvar}>

        <p><strong>autor</strong></p>
          <input type="text"
              value={autor}
              onChange={(e) => { setautor(e.target.value) }} />

           <p><strong>genero</strong></p>
          <input type="text"
              value={genero}
              onChange={(e) => { setgenero(e.target.value) }} />

               <p><strong>nome do livro</strong></p>
          <input type="text"
              value={nomeLivro}
              onChange={(e) => { setnomeLivro(e.target.value) }} />    
          <button>ADICIONAR</button>
      </form>
      {lista.map((ativ) =>
          <ul key={ativ.id}>
              <li>
                  <p>{ativ.autor}</p>
                  <p>{ativ.genero}</p>
                  <p>{ativ.nomeLivro}</p>
                  <button onClick={() => remover(ativ.id)}>Remover</button>
              </li>
          </ul>
      )}
  </div>
);
}