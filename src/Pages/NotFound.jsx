import React from 'react';

const NotFound = (props) =>{
  return (
    <div className='not-found'>
      <h2 className="title-header" style={{margin:'30px 0px 0px 0px'}}>Desculpe.< br /> A página solicitada não pode ser encontrada.</h2>
      <img src="https://loja.proaenf.com.br/img/icons/404.png" alt='Gif página não encontrada' style={{width: '30%', marginTop: '10%'}} className="pulse"/>
    </div>
  )
}

export default NotFound;