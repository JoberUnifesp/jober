import './App.css';

function App() {
  return (
    <div className="App">
      <div className='wraper'>
        <div className='logo'>
          <h1 className='logo-text'>J</h1>
          <h1 className='logo-text'>o</h1>
          <h1 className='logo-text'>b</h1>
          <h1 className='logo-text'>e</h1>
          <h1 className='logo-text'>r</h1>
        </div>
        <div className='login-box'>
          <h1 className='title'>Login</h1>
          <input className='input-class' type='email' placeholder='Email'></input>
          <input className='input-class' type='password' placeholder='Senha'></input>
          <button className='enter-button'>Entrar</button>
          <span className='bar-element'></span>
          <button className='create-button'>Criar nova conta</button>
        </div>
      </div>
    </div>
  );
}

export default App;
