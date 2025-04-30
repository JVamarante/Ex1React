import React from 'react'
import Faculdade from './pages/Faculdade'
import Inicial from './pages/Inicial'
import Noticias from './pages/Noticias'
import Dpolgd from './pages/Dpolgd'
import Contatos from './pages/Contatos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Inicial />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/dpolgd" element={<Dpolgd />} />
      <Route path="/contatos" element={<Contatos />} />
      <Route path="/a-faculdade" element={<Faculdade />} />
    </Routes>

    </BrowserRouter>
  )
}

export default App