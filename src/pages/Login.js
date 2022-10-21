import React from 'react';
import './Login.css';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Login() {
  const [status, setStatus] = React.useState(false);
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
      if (data.code === 401 || data.code === 404){
        setStatus(!status)
      }else if(data.code === 200){
        localStorage.setItem('id', data.id)
        if(data.user){
          navigate('/jober/profile')
        }else{
          navigate('/jober/enterprise-profile')
        }
      }
    });
  }

  return (
    <body className="login-screen">
      <div className='wraper-login'>
        <Logo/>
        <form className='login-box' onSubmit={handleSubmit}>
          <h1 className='title'>Login</h1>
          <input className='input-class' type='email' name='email' placeholder='Email'></input>
          <input className='input-class' type='password' name='senha' placeholder='Senha'></input>
          <p className={status  ? 'error-text' : 'error-text -inv'}>E-mail ou Senha incorretos. Tente novamente.</p>
          <button className='enter-button' type='submit'>Entrar</button>
          <span className='bar-element'></span>
          <Link to='SignUp' className='signup-link'>Criar nova conta</Link>
          <Link to='enterprise' className='enterprise-link'>Quero recrutar!</Link>
        </form>
      </div>
    </body>
  );
}

export default Login;