import React from 'react';
import './Enterprise.css';
import Logo from '../components/Logo';

function Enterprise() {
  function handleSubmit(e) {
  }

  return (
    <body className="App">
      <div className='wraper'>
        <Logo/>
        <form className='enterprise-box' onSubmit={handleSubmit}>
          <div className='column-wrapper'>
            <div className='columns'>
              <input className='input-enterprise' type='name' name='enteprise name' placeholder='Nome da empresa'></input>

              <input className='input-enterprise' type='email' name='email' placeholder='Email'></input>
              <input className='input-enterprise' type='password' name='senha' placeholder='Senha'></input>
            </div>
            <div className='columns'>
              <input className='input-enterprise' type='tel' name='cnpj' placeholder='CNPJ'></input>
              <input className='input-enterprise' type='tel' name='celphone' placeholder='Telefone'></input>
              <input className='input-enterprise' type='password' name='senha' placeholder='Confirmar senha'></input>
            </div>
          </div>
          <footer className='footer-term'>
            <p className='term'>Após o preenchimento e envio dos dados, as informações serão submetidas a validação e aprovação da Jober. Aguarde o contato para começar a recrutar!</p>
            <div className='accept'>
              <input type='checkbox'></input>
              <p className='accept-text'>Aceito receber a confirmação via e-mail</p>
            </div>
          </footer>
          <button className='enterprise-button' type='submit'>Cadastrar</button>
        </form>
      </div>
    </body>
  );
}

export default Enterprise;