import React from 'react';

const Adicao = (props) => {
  const resultado = props.num1 + props.num2;
  return (
    <div>
      O resultado de {props.num1} + {props.num2} é igual a {resultado}.
    </div>
  );
};

export default Adicao;