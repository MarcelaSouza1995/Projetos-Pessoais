import React, {useContext, useState} from 'react';
import { Button, Form, Grid, Modal, Icon } from 'semantic-ui-react';
import { StoreContext } from '../Data/Store';


function ModalEdicao({ element }) {
  const { expenses, setExpenses } = useContext(StoreContext);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState({id:0,})

  function handleChange({target:{name, value}}) {
    setInputValue({...inputValue, [name]: value})
  }

  function editExpense(element) {
    const expensesEdit = expenses.filter((e) => e.id === element.id)
    setInputValue(expensesEdit[0]);
  }

  function addExpense(element) {
   const newExpenses = expenses;
   newExpenses[element.id]= inputValue;
   setExpenses([...newExpenses]);
   setOpen(false);
  }

  return(
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button onClick={ ()=> editExpense(element)}><Icon name='edit' /></Button>}
    >
      <Modal.Header>Editar</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Grid.Column>
        <Form>

        <div>
      <Form>
        <div>
            <Form.Input
              icon='dollar sign'
              iconPosition='left'
              label='Valor'
              placeholder='Valor'
              type='number'
              name='valor'
              value={ inputValue.valor }
              onChange={ handleChange }
            />
            <Form.Input
              icon='sort amount up'
              iconPosition='left'
              label='Quantidade'
              type='number'
              placeholder='Quantidade'
              name='quantidade'
              value={ inputValue.quantidade }
              onChange={ handleChange }
            />
            <Form.Input
              icon='pencil alternate'
              iconPosition='left'
              label='Descrição'
              type='text'
              placeholder='Descrição'
              name='descricao'
              onChange={ handleChange }
              value={ inputValue.descricao }
            />
            <label className="label">Tag
              <select name="tag" label='Tag' onChange={ handleChange} className="select" value={ inputValue.tag } >
                <option>Selecione</option>
                <option value="Alimentação">Alimentação</option>
                <option value="Lazer">Lazer</option>
                <option value="Transporte">Transporte</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Saúde">Saúde</option>
              </select>
              </label>
              <label className="label">Categoria
              <select name="categoria" label='Tag' onChange={ handleChange} className="select" value={ inputValue.categoria }>
                <option>Selecione</option>
                <option value="Despesa">Despesa</option>
                <option value="Receita">Receita</option>
              </select>
              </label>            
            </div>
        </Form>
       </div>

        </Form>
      </Grid.Column>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          SAIR
        </Button>
        <Button
          content='EDITAR'
          labelPosition='right'
          icon='edit'
          positive
          onClick={ ()=> addExpense(element) }
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalEdicao;