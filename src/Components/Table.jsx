import React, {useContext, useState} from 'react'
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
  <Table celled selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Valor</Table.HeaderCell>
        <Table.HeaderCell>Quantidade</Table.HeaderCell>
        <Table.HeaderCell>Descrição</Table.HeaderCell>
        <Table.HeaderCell>Tag</Table.HeaderCell>
        <Table.HeaderCell>Categoria</Table.HeaderCell>
        <Table.HeaderCell>Total</Table.HeaderCell>
        <Table.HeaderCell>Excluir ou Editar</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  
    <Table.Body>
    {expenses.map((e) => 
     <Table.Row>
        <Table.Cell>{`R$ ${e.valor}.00`}</Table.Cell>
        <Table.Cell>{e.quantidade}</Table.Cell>
        <Table.Cell>{e.descricao}</Table.Cell>
        <Table.Cell>{e.tag}</Table.Cell>
        <Table.Cell>{e.categoria}</Table.Cell>
        <Table.Cell>{`R$ ${e.valor * e.quantidade}.00`}</Table.Cell>
        <Table.Cell>
          <Button onClick={ () => deleteExpense(e.id) }>
          <Icon name='trash alternate outline' />
          </Button>
          <ModalEdicao element={ e } />
          </Table.Cell>
        </Table.Row>
      )}
      
      
    </Table.Body>
  </Table>
  )
}

export default TabelaGastos;