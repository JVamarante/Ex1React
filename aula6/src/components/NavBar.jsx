import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Inicial</Link>
        <Link to="/noticias">Notícias</Link>
        <Link to="/dpolgd">Dpolgd</Link>
        <Link to="/contatos">Contatos</Link>
        <Link to="/a-faculdade">A Faculdade</Link>
    </nav>
  )
}

export default NavBar