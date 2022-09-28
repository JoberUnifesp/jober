import React from 'react';
import './Login.css';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';


function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <div className="App">
      <div className='wraper'>
        <Logo/>
        <form className='login-box'>
          <h1 className='title'>Login</h1>
          <input className='input-class' type='email' placeholder='Email'></input>
          <input className='input-class' type='password' placeholder='Senha'></input>
          <button className='enter-button' onClick={handleSubmit}>Entrar</button>
          <span className='bar-element'></span>
          <Link to='SignUp' className='signup-link'>Criar nova conta</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;