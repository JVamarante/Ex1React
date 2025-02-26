import React from 'react';

const Multiplicacao = (props) => {
  const resultado = props.num1 * props.num2;
  return (
    <div>
     O resultado da Multiplicação de num1 - num2 é {props.num1} * {props.num2}.
    </div>
  );
};

export default Multiplicacao;