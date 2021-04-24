import React from 'react';
import HeaderWallet from '../Components/Header.jsx';
import TabelaGastos from  '../Components/Table.jsx';
import FormGastos from '../Components/Form.jsx';
import Footer from '../Components/Footer.jsx';


const Wallet = (props) =>{
  return (
  <div>
    <HeaderWallet />
    <FormGastos />
    <TabelaGastos />
    <Footer />
  </div>
    )
}

export default Wallet;