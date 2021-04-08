import React, { useState, useContext } from 'react'
import { Button, Divider, Form, Grid, Segment, Modal } from 'semantic-ui-react';
import { StoreContext } from '../Data/Store';

function Login(props) {
const {users, setUsers} = useContext(StoreContext)
const [open, setOpen] = useState(false);
const [valuesInputSignUp, setValuesInputSignUp] = useState({});
const [valuesInputLogin, setValuesInputLogin] = useState({});


function handlechange({target:{name, value}}) {
setValuesInputSignUp({...valuesInputSignUp, [name]: value})
}

function handleClick() {
  setUsers([...users, valuesInputSignUp])
  setOpen(false)
}

function handleChangeLogin({target:{name, value}}) {
  setValuesInputLogin({...valuesInputLogin, [name]: value})
}

function clickLogin() {
  const { history } = props;
  history.push('/carteira');
}

function checkLogin(emailLogin, senhaLogin) {
 const result = users.some(({email, senha }) =>  
 email === emailLogin && senha === senhaLogin)
 return !result
}



return(

      <div className="teste">
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Usuário'
            placeholder='Usuário'
            name='email'
            onChange={ handleChangeLogin }
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Senha'
            type='password'
            name='senha'
            placeholder='Senha'
            onChange={ handleChangeLogin }

          />

          <Button 
          content='ENTRAR'
          className='btn'
          primary disabled={ checkLogin(valuesInputLogin.email, valuesInputLogin.senha)} 
          onClick={ clickLogin }/> 
        </Form>
      
        
        <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button content='INSCREVER-SE' icon='signup' size='small' className='btnIns' />}
    >
      <Modal.Header>Cadastrar</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Grid.Column>
        <Form>

        <Form.Input
            icon='envelope'
            iconPosition='left'
            label='Email'
            placeholder='Email'
            name='email'
            onChange={ handlechange }
          />
        <Form.Input
            icon='user'
            iconPosition='left'
            label='Nome'
            placeholder='Nome'
            name='nome'
            onChange={ handlechange }
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Senha'
            type='password'
            name='senha'
            onChange={ handlechange }
          />
        </Form>
      </Grid.Column>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          SAIR
        </Button>
        <Button
          content='CADASTRAR'
          labelPosition='right'
          icon='checkmark'
          onClick={ handleClick }
          positive
        />
      </Modal.Actions>
    </Modal>
      
    </div> 
  
)
  
}

export default Login