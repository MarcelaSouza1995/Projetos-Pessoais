import React, {useState, useContext } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { StoreContext } from '../Data/Store';


const FormGastos = () => {

  const { expenses, setExpenses } = useContext(StoreContext)
  const [inputValue, setInputValue] = useState({id:0,})

  function handleChange({target:{name, value}}) {
    setInputValue({...inputValue, [name]: value})
  }

  function handleClick() {
      setInputValue((estadoAnterior) => ({...inputValue,
      id: estadoAnterior.id + 1,
    }));
    setExpenses([...expenses, inputValue])
  }

  return(
    <div  className='container'>
      <Form>
        <div className="box">
            <Form.Input
              icon='dollar sign'
              iconPosition='left'
              label='Valor'
              placeholder='Valor'
              type='number'
              name='valor'
              onChange={ handleChange }
            />
            <Form.Input
              icon='sort amount up'
              iconPosition='left'
              label='Quantidade'
              type='number'
              placeholder='Quantidade'
              name='quantidade'
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
            />
            <label className="label">Tag
              <select name="tag" label='Tag' onChange={ handleChange} className="select">
                <option>Selecione</option>
                <option value="Alimentação">Alimentação</option>
                <option value="Lazer">Lazer</option>
                <option value="Transporte">Transporte</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Saúde">Saúde</option>
              </select>
              </label>
              <label className="label">Categoria
              <select name="categoria" label='Tag' onChange={ handleChange} className="select">
                <option>Selecione</option>
                <option value="Despesa">Despesa</option>
                <option value="Receita">Receita</option>
              </select>
              </label>
              <Button content='ADICIONAR' primary onClick={ handleClick } className="btn" />
            
            </div>
        </Form>
       </div>
  )
}

export default FormGastos;