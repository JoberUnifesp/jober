import './SignUp.css';
import Logo from '../components/Logo';

function SignUp() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <div className="App">
      <div className='wraper'>
        <Logo/>
        <form className='signup-box'>
          <div className='div-name'>
            <input className='input-class' type='name' placeholder='Nome'></input>
            <input className='input-class' type='name' placeholder='Sobrenome'></input>
          </div>
          <div className='div-data-email'>
            <p className='label-data'>Data de nascimento</p>
            <input className='input-class -data' type='date'></input>
            <input className='input-class -email' type='email' placeholder='Email'></input>
          </div>
          <div className='div-password'>
            <input className='input-class' type='password' placeholder='Senha'></input>
            <input className='input-class' type='password' placeholder='Confirmar senha'></input>
          </div>
          <button className='signup-button' onClick={handleSubmit}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;