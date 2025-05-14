import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DpoLgpd = () => {

  const [dpoLgpd, setDpoLgpd] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/dpolgpd") 
      .then(response => setDpoLgpd(response.data))
      .catch(error => console.error("Erro ao carregar o Dpolgpd:", error));
  }, [])

  return (
    <div>
      <h1>Dpo lgpd</h1>
        {
          dpoLgpd.map((dpolgpd) => (
            <div key={dpolgpd.id}>
              <h2>{dpolgpd.titulo}</h2>
              <p>{dpolgpd.texto}</p>
            </div>
          ))
        }
    </div>
  )
}

export default DpoLgpd