import React from 'react';
import './Login.css';
import LogoINI from '../components/Logo';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Login() {
  const [status, setStatus] = React.useState(false);
  const navigate = useNavigate();
  const base_url = 'https://jober.azurewebsites.net'


  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');


    const user = {
      email: e.target.email.value,
      senha: e.target.senha.value
    }
    
    fetch(`${base_url}/login`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then((res) => res.json())
    .then(data => { 
      console.log(data)
      if (data.code === 401 || data.code === 404){
        setStatus(!status)
      }else if(data.code === 200){
        sessionStorage.setItem('meuid', data.id)
        console.log(sessionStorage.getItem('meuid'))
        if(data.user){
          navigate('/jober/profile')
        }else{
          navigate('/jober/enterpriseProfile')
        }
      }
    });
  }

  return (
    <div className="login-screen">
      <div className='wraper-login'>
        <LogoINI/>
        <form className='login-box' onSubmit={handleSubmit}>
          <h1 className='title'>Login</h1>
          <input className='input-class' type='email' name='email' placeholder='Email'></input>
          <input className='input-class' type='password' name='senha' placeholder='Senha'></input>
          <p className={status  ? 'error-text' : 'error-text -inv'}>E-mail ou Senha incorretos. Tente novamente.</p>
          <button className='enter-button' type='submit'>Entrar</button>
          <span className='bar-element'></span>
          <h3 className='text'>Ainda não tem uma conta Jober?</h3>
          <Link to='SignUp' className='signup-link'>Crie uma agora mesmo :)</Link>
          <Link to='enterprise' className='enterprise-link'>Quero cadastrar minha empresa!</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;