import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import EstaComSono from './components/EstaComSono'
import Aluno from './components/Aluno'
const App = () => {
  return (
    <div>
    {
      [ {nome: "João", email: "joao@gmail.com", curso: "Sistemas de Internet"},
        {nome: "Maria", email: "Maria@gmail.com", curso: "Sistemas de Internet"},
        {nome: "Kellyanne", email: "kellyanne@gmail.com", curso: "Sistemas de Informação"},
      ].map((aluno) => 
        <Aluno 
          nome={aluno.nome}
          email={aluno.email}
          curso={aluno.curso}
        />  
      )
    }
    </div>
  )
}

export default App