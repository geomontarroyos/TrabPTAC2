import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ToDo() {
    const [lista, setLista] = useState([]);
    const [atividade, setAtividade] = useState("");
  
    const salvar = (e) => {
      e.preventDefault();
      setLista([
        ...lista,
        {
          atividade: atividade,
        },
      ]);
      setId(id + 1);
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
      <h1>Lista de Atividades</h1>
      <form onSubmit={salvar}>
          <input type="text"
              value={atividade}
              onChange={(e) => { setAtividade(e.target.value) }} />
          <button>ADICIONAR</button>
      </form>
      {lista.map((ativ) =>
          <ul key={ativ.id}>
              <li>
                  <p>{ativ.atividade}</p>
                  <button onClick={() => remover(ativ.id)}>Remover</button>
              </li>
          </ul>
      )}
  </div>
);
}