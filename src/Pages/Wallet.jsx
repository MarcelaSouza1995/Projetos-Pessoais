import React from 'react';
import HeaderWallet from '../Components/Header.jsx';
import TabelaGastos from  '../Components/Table.jsx';
import FormGastos from '../Components/Form.jsx';


const Wallet = (props) =>{
  return (
  <div>
    <HeaderWallet />
    <FormGastos />
    <TabelaGastos />
  </div>
    )
}

export default Wallet;