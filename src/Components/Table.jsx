import React, { useContext } from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'
import { StoreContext } from '../Data/Store';
import ModalEdicao from '../Components/ModalEdicao';

const TabelaGastos = () => {
  const { expenses, setExpenses } = useContext(StoreContext);

  function deleteExpense(id) {
   const newExpenses = expenses.filter((e) => e.id !== id );
   setExpenses(newExpenses)
  }

  return (
    <div className="container-table">
      <Table celled selectable style={{width: '89%',}}>
        <Table.Header >
          <Table.Row>
            <Table.HeaderCell style={{ textAlign: 'center' }}>Valor</Table.HeaderCell>
            <Table.HeaderCell style={{ textAlign: 'center' }}>Quantidade</Table.HeaderCell>
            <Table.HeaderCell style={{ textAlign: 'center' }}>Descrição</Table.HeaderCell>
            <Table.HeaderCell style={{ textAlign: 'center' }}>Tag</Table.HeaderCell>
            <Table.HeaderCell style={{ textAlign: 'center' }}>Categoria</Table.HeaderCell>
            <Table.HeaderCell style={{ textAlign: 'center' }}>Total</Table.HeaderCell>
            <Table.HeaderCell style={{ textAlign: 'center' }}>Excluir ou Editar</Table.HeaderCell>
           </Table.Row>
        </Table.Header>
      
        <Table.Body >
        {expenses.map((e) => 
        <Table.Row>          
            <Table.Cell style={{ textAlign: 'center' }}>{`R$ ${e.valor}.00`}</Table.Cell>
            <Table.Cell style={{ textAlign: 'center' }}>{e.quantidade}</Table.Cell>
            <Table.Cell style={{ textAlign: 'center' }}>{e.descricao}</Table.Cell>
            <Table.Cell style={{ textAlign: 'center' }}>{e.tag}</Table.Cell>
            <Table.Cell style={{ textAlign: 'center' }}>{e.categoria}</Table.Cell>
            <Table.Cell style={{ textAlign: 'center' }}>{`R$ ${e.valor * e.quantidade}.00`}</Table.Cell>
            <Table.Cell style={{ textAlign: 'center' }}>
            <Button animated='vertical' onClick={ () => deleteExpense(e.id) } color='red'>
              <Button.Content hidden color='black'>Apagar</Button.Content>
              <Button.Content visible>
                <Icon name='trash alternate' color='black'/>
              </Button.Content>
            </Button>
              <ModalEdicao element={ e }/>
              </Table.Cell>
            </Table.Row>
          )}
          
          
        </Table.Body>
      </Table>
  </div>
  )
}

export default TabelaGastos;