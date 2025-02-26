import React from 'react';

const Divisao = (props) => {
  const resultado = props.num1 / props.num2;
  return (
    <div>
      O resultado da divisão de num1 + num2 é: {props.num1} / {props.num2}.
    </div>
  );
};

export default Divisao;