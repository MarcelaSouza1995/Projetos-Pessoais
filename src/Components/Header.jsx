import React, { useContext } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import { StoreContext } from '../Data/Store';

const HeaderWallet = () => {
  const{expenses, userCurr} = useContext(StoreContext);
  const contador = expenses.reduce((acc, curr) => 
  curr.categoria === 'Receita'? acc + (curr.valor * curr.quantidade)
  : acc - (curr.valor * curr.quantidade),0);
  
  return(
  <div>
      <Header as='h2' attached='top'>
        Carteira
      </Header>
      <Segment attached>
      <Header sub>Saldo Total</Header>
        <span>{`R$ ${contador.toFixed(2)}`}</span>
      </Segment>
  </div>
)}

export default HeaderWallet;