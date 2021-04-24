import React, { useContext } from 'react';
import { StoreContext } from '../Data/Store';

const HeaderWallet = () => {
  const{ expenses } = useContext(StoreContext);
  const contador = expenses.reduce((acc, curr) => 
  curr.categoria === 'Receita'? acc + (curr.valor * curr.quantidade)
  : acc - (curr.valor * curr.quantidade),0);
  
  return(
  <div className="header">
      <h1 className='title-header'>
        Controle de Gastos
      </h1>
      <div className="zoom">
        <div className="saldo-total">
          <h3>Saldo Total</h3>
          <span>{`R$ ${contador.toFixed(2)}`}</span>
        </div>
      </div>
  </div>
)}

export default HeaderWallet;