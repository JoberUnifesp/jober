import { useState, useEffect } from 'react';
//import './cadidates.css';

function Cadidates() {
    // const id = sessionStorage.getItem('meuid')
    // const base_url = 'https://jober.azurewebsites.net'
  
    
    const [candidates, setCandidates] = useState([])
    const [firstCandidate, setFirstCandidate] = useState({Id: "", Nome: "", Experiecias: [], Formacoes: [], HardSkilss: [], Idiomas: [], softSkils: [], like: ""})
    const [secondCandidate, setSecondCandidate] = useState({Id: "", Nome: "", Experiecias: [], Formacoes: [], HardSkilss: [], Idiomas: [], softSkils: [], like: ""})
    const [saved, setSaved] = useState([])
    const [liked, setLiked] = useState([])
    const [count, setCount] = useState(0)
  
  
  
    // useEffect(() => {  
    //   fetch(`${base_url}/vacancy/allVacancies/${id}`, {
    //     method: "GET",
    //     headers: {
    //       'Content-type': 'application/json'
    //     }
    //   })
    //   .then(res => res.json())
    //   .then((data)=> {
    //     if (data !== null){
    //       let temp = data.map((element) => {
  
    //         return {Id: element.ID, Nome: element.CARGO, Empresa: element.COMPANY_NAME, req1: `${element.HS_1} ${element.HS_1_NIVEL}`, req2: `${element.HS_2} ${element.HS_2_NIVEL}`, req3: `${element.HS_3} ${element.HS_3_NIVEL}`, like: element.like}
    //       })
  
  
    //       setFirstVacancie(temp[0])
    //       temp.push({Nome: 'Loading...', Empresa: 'Loading...', req1: 'Loading...', req2: 'Loading...', req3: 'Loading...', like: false})
    //       setVacancies(temp)
  
    //       console.log(temp)
    //       console.log(vacancies)
          
    //     }
    //   })
  
    // }, []);
  
    function UpdateFunc() {
        var value = 'Teste ' + String(count)
        setFirstCandidate({Id: value, Nome: value, Experiecias: [value, value, value], Formacoes: [value, value, value], HardSkilss: [value, value, value], Idiomas: [value, value, value], softSkils: [value, value, value], like: false})
        setCandidates([...candidates, firstCandidate])

        setCount(v => v + 1)
    }
  
    function passFunc() {
      var temp = [...candidates]
      var passedTemp = firstCandidate;
      var atual = temp.shift()
      atual = temp[0]
  
      if (atual !== undefined) {
        setSecondCandidate(atual)
      }
  
    //   fetch(`${base_url}/interaction/pass`, {
    //     method: "POST",
    //     headers: {
    //       'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify({user_id: id, vacancy_id: passedTemp.Id})      
    //   })
    //   .then((res) => res.json())
    //   .then(data => {
    //     console.log(data)
    //   })
  
      setTimeout(() => {
        if (atual !== undefined) {
            setFirstCandidate(atual)
            setCandidates(temp)
        }
      }, 500)
      if(temp.length !== 0){
        moveFunc('-moveLeft')
      }
    }
  
    function saveFunc() {
      var temp = [...candidates]
      var savedTemp = firstCandidate;
      setSaved([...saved, savedTemp])
      var atual = temp.shift()
      atual = temp[0]
      if (atual !== undefined) {
        setSecondCandidate(atual)
      }
  
    //   fetch(`${base_url}/interaction/save`, {
    //     method: "POST",
    //     headers: {
    //       'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify({user_id: id, vacancy_id: savedTemp.Id})      
    //   })
    //   .then((res) => res.json())
    //   .then(data => {
    //     console.log(data)
    //   })
  
  
      setTimeout(() => {
        if (atual !== undefined) {
            setFirstCandidate(atual)
            setCandidates(temp)
        }
      }, 500)
      if(temp.length !== 0){
        moveFunc('-moveDown')
      }
    }
  
    function likeFunc() {
      var temp = [...candidates]
      var likedTemp = firstCandidate
      setLiked([...liked, likedTemp])
      var atual = temp.shift()
      atual = temp[0]
      if (atual !== undefined) {
        setSecondCandidate(atual)
      }
      if(temp.length !== 0){
        moveFunc('-moveRight');
      }
      setTimeout(() => {
        if (atual !== undefined) {
            setFirstCandidate(atual)
            setCandidates(temp)
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
                <p className='name-vacancies'>{firstCandidate.Nome}</p>
                <hr className="hr1"></hr>
                <p className='enterprise-vacancies'>Experiências: </p>
                {firstCandidate.Experiecias.map(item => <p>{item}</p>)}
                <p className='enterprise-vacancies'>Formações:</p>
                {firstCandidate.Formacoes.map(item => <p>{item}</p>)}
                <p className='enterprise-vacancies'>Hard Skils:</p>
                {firstCandidate.HardSkilss.map(item => <p>{item}</p>)}
                <p className='enterprise-vacancies'>Idiomas:</p>
                {firstCandidate.Idiomas.map(item => <p>{item}</p>)}
                <p className='enterprise-vacancies'>soft Skils:</p>
                {firstCandidate.softSkils.map(item => <p>{item}</p>)}

                <p className={firstCandidate.like  ? 'like-text' : 'like-text -inv'}>🧡 A {firstCandidate.Empresa} gostou do seu perfil para esta vaga</p>
            </div>
            
            <div className='content-vacancies -second'>
                <p className='name-vacancies'>{secondCandidate.Nome}</p>
                <hr className="hr1"></hr>
                <p className='enterprise-vacancies'>Experiências:</p>
                {secondCandidate.Experiecias.map(item => <p>{item}</p>)}
                <p className='enterprise-vacancies'>Formações:</p>
                {secondCandidate.Formacoes.map(item => <p>{item}</p>)}
                <p className='enterprise-vacancies'>Hard Skils:</p>
                {secondCandidate.HardSkilss.map(item => <p>{item}</p>)}
                <p className='enterprise-vacancies'>Idiomas:</p>
                {secondCandidate.Idiomas.map(item => <p>{item}</p>)}
                <p className='enterprise-vacancies'>soft Skils:</p>
                {secondCandidate.softSkils.map(item => <p>{item}</p>)}
                
                <p className={secondCandidate.like  ? 'like-text' : 'like-text -inv'}>🧡 A {secondCandidate.Empresa} gostou do seu perfil para esta vaga</p>
            </div>
            <div className='div-buttons-job'>
              <button className='pass-button-vacancies' onClick={() => passFunc()}></button>
              <button className='save-button-vacancies' onClick={() => saveFunc()}></button>
              <button className='like-button-vacancies' onClick={() => likeFunc()}></button>
            </div>
        </main>
      </div>
    );
}
export default Cadidates;