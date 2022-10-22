import { useState, useEffect } from 'react';
import './job-vacancies.css';
import pass from '../assets/pass.svg'
import passwhite from '../assets/passwhite.svg'
import save from '../assets/save.svg'
import savewhite from '../assets/savewhite.svg'
import like from '../assets/pass.svg'
import likewhite from '../assets/likewhite.svg'

function JobVacancies() {
  const [vacancies, setVacancies] = useState([])
  const [actualVacancie, setActualVacancie] = useState({Nome: "", Empresa: "", req1: "", req2: ""})
  const [saved, setSaved] = useState([])
  const [liked, setLiked] = useState([])


  function updateFunc() {
    // setActualVacancie({"Nome": 'Teste9', "Empresa": 'Teste9', "req1": 'Teste9', "req2": 'Teste9'})
    // setVacancies([...vacancies, actualVacancie])
    // console.log(actualVacancie)

    // setActualVacancie({Nome: 'Teste8', Empresa: 'Teste8', req1: 'Teste8', req2: 'Teste8'})
    // setVacancies([...vacancies, actualVacancie])
    // console.log(actualVacancie)

    // setActualVacancie({Nome: 'Teste7', Empresa: 'Teste7', req1: 'Teste7', req2: 'Teste7'})
    // setVacancies([...vacancies, actualVacancie])
    // console.log(actualVacancie)

    // setActualVacancie({Nome: 'Teste6', Empresa: 'Teste6', req1: 'Teste6', req2: 'Teste6'})
    // setVacancies([...vacancies, actualVacancie])
    // console.log(actualVacancie)

    // setActualVacancie({Nome: 'Teste5', Empresa: 'Teste5', req1: 'Teste5', req2: 'Teste5'})
    // setVacancies([...vacancies, actualVacancie])
    // console.log(actualVacancie)

    // setActualVacancie({Nome: 'Teste4', Empresa: 'Teste4', req1: 'Teste4', req2: 'Teste4'})
    // setVacancies([...vacancies, actualVacancie])
    // console.log(actualVacancie)

    // setActualVacancie({Nome: 'Teste3', Empresa: 'Teste3', req1: 'Teste3', req2: 'Teste3'})
    // setVacancies([...vacancies, actualVacancie])
    // console.log(actualVacancie)

    // setActualVacancie({Nome: 'Teste2', Empresa: 'Teste2', req1: 'Teste2', req2: 'Teste2'})
    // setVacancies([...vacancies, actualVacancie])
    // console.log(actualVacancie)

    setActualVacancie({Nome: 'Teste1', Empresa: 'Teste1', req1: 'Teste1', req2: 'Teste1'})
    setVacancies([...vacancies, actualVacancie])
    console.log(actualVacancie)
    }

  function passFunc() {
    var temp = [...vacancies]
    temp.splice(temp.length-1, temp.length);
    setVacancies(temp)
    console.log(vacancies)
    var atual = temp.splice(temp.length-1, temp.length);
    setActualVacancie(atual)
  }

  function saveFunc() {
    var temp = [...vacancies]
    var savedTemp =temp.splice(temp.length-1, temp.length)
    setVacancies(temp)
    console.log(vacancies)
    setSaved([...saved, savedTemp])
    var atual = temp.splice(temp.length-1, temp.length)
    setActualVacancie(atual)
  }

  function likeFunc() {
    var temp = [...vacancies]
    var likedTemp = temp.splice(temp.length-1, temp.length);
    setVacancies(temp)
    console.log(vacancies)
    setLiked([...liked, likedTemp])
    var atual = temp.splice(temp.length-1, temp.length);
    setActualVacancie(atual)
  }

  return (
    <div className='vacancies-screen'>
        <header className='header-vacancies'>
          <div className='logo -vacancies'>
            <h1 className='logo-text -vacancies'>J</h1>
            <h1 className='logo-text -vacancies'>o</h1>
            <h1 className='logo-text -vacancies'>b</h1>
            <h1 className='logo-text -vacancies'>e</h1>
            <h1 className='logo-text -vacancies'>r</h1>
        </div>
      </header>
      <main className='main-vacancies'>
          <div className='content-vacancies'>
            <p className='name-vacancies'>EXEMPLO{actualVacancie.Nome}</p>
            <hr className="hr1"></hr>
            <p className='enterprise-vacancies'>Empresa: {actualVacancie.Empresa}</p>
            <p className='title-req-vacancies'>Requisitos</p>
            <ul>
              <li className='list-req-vacancies'>{actualVacancie.req1}</li>
              <li className='list-req-vacancies'>{actualVacancie.req2}</li>
            </ul>
          </div>
          <div className='div-buttons'>
            <button className='pass-button-vacancies' onClick={() => passFunc()}></button>
            <button className='save-button-vacancies' onClick={() => saveFunc()}></button>
            <button className='like-button-vacancies' onClick={() => likeFunc()}></button>
          </div>
      </main>
    </div>
  );
}

export default JobVacancies;