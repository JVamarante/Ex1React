import React from 'react';
import Adicao from './components/Adicao';
import Subtracao from './components/Subtracao';
import Multiplicacao from './components/Multiplicacao';
import Divisao from './components/Divisao';
import PrecisoEstudar from './components/PrecisoEstudar'; // Importe o componente

const App = () => {
  return (
    <div>
      <Adicao num1={5} num2={8} />
      <Subtracao num1={10} num2={4} />
      <Multiplicacao num1={10} num2={5} />
      <Divisao num1={20} num2={5} />

      <PrecisoEstudar nomeDaTecnologia="React" />
      <PrecisoEstudar nomeDaTecnologia="JavaScript" />
    </div>
  );
};

export default App;