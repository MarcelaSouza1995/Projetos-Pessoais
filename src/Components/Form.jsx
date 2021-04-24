import React, {useState, useContext } from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import { StoreContext } from '../Data/Store';


const FormGastos = () => {

  const { expenses, setExpenses } = useContext(StoreContext);
  const [inputValue, setInputValue] = useState({id:0,});

  function handleChange({target:{name, value}}) {
    setInputValue({...inputValue, [name]: value});
  }

  function handleClick() {
      setInputValue((estadoAnterior) => ({...inputValue,
      id: estadoAnterior.id + 1,
    }));
    setExpenses([...expenses, inputValue]);
    setInputValue((inputValue) => ({
      ...inputValue, 
      valor: '',
      quantidade: '',
      descricao: '',
      tag: 'Selecione',
      categoria: 'Selecione',
    }))
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
              value={ inputValue.valor }
              onChange={ handleChange }
              className="input-form"
            />
            <Form.Input
              icon='sort amount up'
              iconPosition='left'
              label='Quantidade'
              type='number'
              placeholder='Quantidade'
              name='quantidade'
              onChange={ handleChange }
              className="input-form"
              value={ inputValue.quantidade }

            />
            <Form.Input
              icon='pencil alternate'
              iconPosition='left'
              label='Descrição'
              type='text'
              placeholder='Descrição'
              name='descricao'
              onChange={ handleChange }
              className="input-form"
              value={ inputValue.descricao }

            />
            <label className="label">Tag
              <select name="tag" label='Tag' onChange={ handleChange} className="select input-form" value={ inputValue.tag } >
                <option>Selecione</option>
                <option value="Alimentação">Alimentação</option>
                <option value="Lazer">Lazer</option>
                <option value="Transporte">Transporte</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Saúde">Saúde</option>
              </select>
              </label>
              <label className="label">Categoria
              <select name="categoria" label='Tag' onChange={ handleChange} className="select input-form" value={ inputValue.categoria }>
                <option>Selecione</option>
                <option value="Despesa">Despesa</option>
                <option value="Receita">Receita</option>
              </select>
              </label>

             <Button animated 
              primary onClick={ handleClick } 
              className="btn input-form" 
              style={{ backgroundColor: '#797A9E',marginTop:'9px', width: '160px',}}
             >
              <Button.Content visible left>ADICIONAR</Button.Content>
              <Button.Content hidden>
                <Icon name='add left' />
              </Button.Content>
            </Button>

            
            </div>
        </Form>
       </div>
  )
}

export default FormGastos;