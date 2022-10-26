import { useState, useEffect } from 'react';
import './job-vacancies.css';
import pass from '../assets/pass.svg'
import passwhite from '../assets/passwhite.svg'
import save from '../assets/save.svg'
import savewhite from '../assets/savewhite.svg'
import like from '../assets/pass.svg'
import likewhite from '../assets/likewhite.svg'

function JobVacancies() {
  const id = sessionStorage.getItem('meuid')
  const base_url = 'https://jober.azurewebsites.net'

  
  const [vacancies, setVacancies] = useState([])
  const [firstVacancie, setFirstVacancie] = useState({Nome: "", Empresa: "", req1: "", req2: "", req3: ""})
  const [secondVacancie, setSecondVacancie] = useState({Nome: "", Empresa: "", req1: "", req2: "", req3: ""})
  const [saved, setSaved] = useState([])
  const [liked, setLiked] = useState([])
  const [count, setCount] = useState(0)



  useEffect(() => {  
    fetch(`${base_url}/vacancy`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((data)=> {
      if (data !== null){
        let temp = data.map((element) => {
          return {Nome: element.CARGO, Empresa: element.AREA, req1: `${element.HS_1} ${element.HS_1_NIVEL}`, req2: `${element.HS_2} ${element.HS_2_NIVEL}`, req3: `${element.HS_3} ${element.HS_3_NIVEL}`}
        })
        setFirstVacancie(temp[0])
        temp.push({Nome: 'Loading...', Empresa: 'Loading...', req1: 'Loading...', req2: 'Loading...', req3: 'Loading...'})
        setVacancies(temp)

        console.log(temp)
        console.log(vacancies)
        
      }
    })
  }, []);

  function UpdateFunc() {
      var value = 'Teste ' + String(count)
      setFirstVacancie({Nome: value, Empresa: value, req1: value, req2: value, req3: value})
      setVacancies([...vacancies, firstVacancie])
      // console.log(vacancies)
      setCount(v => v + 1)
  }

  function passFunc() {
    var temp = [...vacancies]
    var atual = temp.shift()
    atual = temp[0]

    if (atual !== undefined) {
      setSecondVacancie(atual)
    }
    setTimeout(() => {
      if (atual !== undefined) {
        setFirstVacancie(atual)
        setVacancies(temp)
      }
    }, 500)
    if(temp.length !== 0){
      moveFunc('-moveLeft')
    }
  }

  function saveFunc() {
    var temp = [...vacancies]
    var savedTemp = firstVacancie;
    setSaved([...saved, savedTemp])
    var atual = temp.shift()
    atual = temp[0]
    if (atual !== undefined) {
      setSecondVacancie(atual)
    }
    setTimeout(() => {
      if (atual !== undefined) {
        setFirstVacancie(atual)
        setVacancies(temp)
      }
    }, 500)
    if(temp.length !== 0){
      moveFunc('-moveDown')
    }
  }

  function likeFunc() {
    var temp = [...vacancies]
    var likedTemp = firstVacancie
    setLiked([...liked, likedTemp])
    var atual = temp.shift()
    atual = temp[0]
    if (atual !== undefined) {
      setSecondVacancie(atual)
    }
    if(temp.length !== 0){
      moveFunc('-moveRight');
    }
    setTimeout(() => {
      if (atual !== undefined) {
        setFirstVacancie(atual)
        setVacancies(temp)
      }
    }, 500)
  }

  function moveFunc(addClass) {
    var element = document.getElementById('first');
    element.classList.add(addClass);
    setTimeout(() => {
      element.classList.remove(addClass);
    }, 500)    
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
          <div className='content-vacancies -first' id='first'>
            <p className='name-vacancies'>{firstVacancie.Nome}</p>
            <hr className="hr1"></hr>
            <p className='enterprise-vacancies'>Empresa: {firstVacancie.Empresa}</p>
            <p className='title-req-vacancies'>Requisitos</p>
            <ul>
              <li className='list-req-vacancies'>{firstVacancie.req1}</li>
              <li className='list-req-vacancies'>{firstVacancie.req2}</li>
              <li className='list-req-vacancies'>{firstVacancie.req3}</li>
            </ul>
          </div>
          <div className='content-vacancies -second'>
            <p className='name-vacancies'>{secondVacancie.Nome}</p>
            <hr className="hr1"></hr>
            <p className='enterprise-vacancies'>Empresa: {secondVacancie.Empresa}</p>
            <p className='title-req-vacancies'>Requisitos</p>
            <ul>
              <li className='list-req-vacancies'>{secondVacancie.req1}</li>
              <li className='list-req-vacancies'>{secondVacancie.req2}</li>
              <li className='list-req-vacancies'>{secondVacancie.req3}</li>
            </ul>
          </div>
          <div className='div-buttons-job'>
            <button className='pass-button-vacancies' onClick={() => passFunc()}></button>
            <button className='save-button-vacancies' onClick={() => saveFunc()}></button>
            <button className='like-button-vacancies' onClick={() => likeFunc()}></button>
          </div>
      </main>
      <button className='like-button-vacancies' onClick={() => UpdateFunc()}></button>
    </div>
  );
}

export default JobVacancies;