import React from 'react';
import './SignUp.css';
import Logo from '../components/Logo';
import {useNavigate} from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');

    const newUser = {
      nome: e.target.nome.value,
      sobrenome: e.target.sobrenome.value,
      data_de_nascimento: e.target.data_de_nascimento.value,
      email: e.target.email.value,
      senha: e.target.senha.value
    }
    
    fetch('https://engsoft-jober.azurewebsites.net/SignUp', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then((res) => res.json())
    .then(data => { 
      console.log(data)
      if(data.code === 200){ 
        navigate('/jober'); 
      }
    });
  }

  return (
    <body className="App">
      <div className='wraper'>
        <Logo/>
        <form className='signup-box' onSubmit={handleSubmit}>
          <div className='div-name'>
            <input className='input-signup' type='name' name='nome' placeholder='Nome'></input>
            <input className='input-signup' type='name' name='sobrenome' placeholder='Sobrenome'></input>
          </div>
          <div className='div-data-email'>
            <p className='label-data'>Data de nascimento</p>
            <input className='input-signup -data' type='date' name='data_de_nascimento'></input>
            <input className='input-signup -email' type='email'  name='email' placeholder='Email'></input>
          </div>
          <div className='div-password'>
            <input className='input-signup' type='password' name='senha' placeholder='Senha'></input>
            <input className='input-signup' type='password' placeholder='Confirmar senha'></input>
          </div>
          <button className='signup-button' type='submit'>Cadastrar</button>
        </form>
      </div>
    </body>
  );
}

export default SignUp;