import React from 'react';
import './Login.css';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');


    const user = {
      email: e.target.email.value,
      senha: e.target.senha.value
    }
    
    fetch('https://engsoft-jober.azurewebsites.net/login', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then((res) => res.json())
    .then(data => { 
      console.log(data)
    });
  }

  return (
    <div className="App">
      <div className='wraper'>
        <Logo/>
        <form className='login-box' onSubmit={handleSubmit}>
          <h1 className='title'>Login</h1>
          <input className='input-class' type='email' name='email' placeholder='Email'></input>
          <input className='input-class' type='password' name='senha' placeholder='Senha'></input>
          <button className='enter-button' type='submit'>Entrar</button>
          <span className='bar-element'></span>
          <Link to='SignUp' className='signup-link'>Criar nova conta</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;