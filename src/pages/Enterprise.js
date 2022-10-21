import React from 'react';
import './Enterprise.css';
import Logo from '../components/Logo';
import {useNavigate} from 'react-router-dom';

function Enterprise() {
  const navigate = useNavigate();
    
  function handleSubmit(e) {
    e.preventDefault();
    
    const newEnterprise = {
      nome: e.target.enteprise_name.value,
      email: e.target.email.value,
      senha: e.target.senha.value,
      cnpj: e.target.cnpj.value,
      telefone: e.target.cellphone.value
    }
    
    console.log(newEnterprise);

    fetch('https://engsoft-jober.azurewebsites.net/company/SignUp', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newEnterprise)
    })
    .then((res) => res.json())
    .then(data => { 
      console.log(data)
      if(data.code === 409){ 
        //mostrar mensagem de erro na tela
      }
      if(data.code === 200){ 
        navigate('/jober'); 
      }
    });
  }

  return (
    <div className="eProfile-screen">
      <div className='wraper-eProfile'>
        <Logo/>
        <form className='enterprise-box' onSubmit={handleSubmit}>
          <div className='column-wrapper'>
            <div className='columns'>
              <input className='input-enterprise' type='name' name='enteprise_name' placeholder='Nome da empresa'></input>

              <input className='input-enterprise' type='email' name='email' placeholder='Email'></input>
              <input className='input-enterprise' type='password' name='senha' placeholder='Senha'></input>
            </div>
            <div className='columns'>
              <input className='input-enterprise' type='tel' name='cnpj' placeholder='CNPJ'></input>
              <input className='input-enterprise' type='tel' name='cellphone' placeholder='Telefone'></input>
              <input className='input-enterprise' type='password' placeholder='Confirmar senha'></input>
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
    </div>
  );
}

export default Enterprise;