import { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import mais from '../assets/mais.png'
import './user-profile.css';

const id = localStorage.getItem('id')

function UserProfile() {
  const [github, setGithub] = useState('GitHub')
  const [NomeSobrenome, setNomeSobrenome] = useState('Nome Sobrenome')
  const [email, setEmail] = useState('Email')


  useEffect(() => {

    fetch(`https://engsoft-jober.azurewebsites.net/ViewExperiences/${id}`, {
        method: "GET",
        headers: {
          'Content-type': 'application/json'
        }
    }).then(res => res.json())
      .then((data)=> {
        let i = 0
        let exp = []
        for(i=0; i<data.length; i++){
          let ini_day = (new Date(data[i].INICIO)).getUTCDate()
          let ini_month = (new Date(data[i].INICIO)).getUTCMonth() + 1
          let ini_year = (new Date(data[i].INICIO)).getUTCFullYear()
          let ini = `${ini_year}-${ini_month}-${ini_day}`

          let fim_day = (new Date(data[i].FIM)).getUTCDate()
          let fim_month = (new Date(data[i].FIM)).getUTCMonth() + 1
          let fim_year = (new Date(data[i].FIM)).getUTCFullYear()
          let fim = `${fim_year}-${fim_month}-${fim_day}`


          exp.push({Cargo: data[i].CARGO, Empresa: data[i].EMPRESA, Inicio: ini, Fim:fim})
        }
        console.log(exp)
        setExperiences(exp)
    });

    fetch(`https://engsoft-jober.azurewebsites.net/ViewGraduations/${id}`, {
        method: "GET",
        headers: {
          'Content-type': 'application/json'
        }
    }).then(res => res.json())
      .then((data)=> {
        let i = 0
        let GRADUATIONS = []
        for(i=0; i<data.length; i++){
          let ini_day = (new Date(data[i].INICIO)).getUTCDate()
          let ini_month = (new Date(data[i].INICIO)).getUTCMonth() + 1
          let ini_year = (new Date(data[i].INICIO)).getUTCFullYear()
          let ini = `${ini_year}-${ini_month}-${ini_day}`

          let fim_day = (new Date(data[i].FIM)).getUTCDate()
          let fim_month = (new Date(data[i].FIM)).getUTCMonth() + 1
          let fim_year = (new Date(data[i].FIM)).getUTCFullYear()
          let fim = `${fim_year}-${fim_month}-${fim_day}`


          GRADUATIONS.push({Curso: data[i].CURSO, Instituicao: data[i].INSTITUICAO, Inicio: ini, Fim:fim})
        }
        console.log(GRADUATIONS)
        setGraduations(GRADUATIONS)
    });


    fetch(`https://engsoft-jober.azurewebsites.net/ViewHardSkills/${id}`, {
        method: "GET",
        headers: {
          'Content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then((data)=> {
      let i = 0
      let HARDSKILLS = []
      for(i=0; i<data.length; i++){
        HARDSKILLS.push({Skill: data[i].NOME, Nivel:  data[i].NIVEL})
      }
      console.log(HARDSKILLS)
      setSkills(HARDSKILLS)
    });

    fetch(`https://engsoft-jober.azurewebsites.net/ViewLanguages/${id}`, {
        method: "GET",
        headers: {
          'Content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then((data)=> {
      let i = 0
      let LANGUAGES = []
      for(i=0; i<data.length; i++){
        LANGUAGES.push({Lingua: data[i].NOME, Nivel:  data[i].NIVEL})
      }
      console.log(LANGUAGES)
      setLanguages(LANGUAGES)
    });

    fetch(`https://engsoft-jober.azurewebsites.net/github/${id}`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((data)=> {
      if (data !== null){
        setGithub(data)
      }
    })

    fetch(`https://engsoft-jober.azurewebsites.net/NomeSobrenome/${id}`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((data)=> {
      if (data !== null){
        setNomeSobrenome(data)
      }
    })

    fetch(`https://engsoft-jober.azurewebsites.net/email/${id}`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((data)=> {
      if (data !== null){
        setEmail(data)
      }
    })

  }, []);

  
  
  const [experiences, setExperiences] = useState([])
  const [newExperience, setNewExperience] = useState({Cargo: "", Empresa: "", Inicio: "", Fim: ""})

  function addExperience() {
    setExperiences([...experiences, newExperience])
    setNewExperience({Cargo: "", Empresa: "", Inicio: "", Fim: ""})

    fetch(`https://engsoft-jober.azurewebsites.net/UserProfile/Edit/Experience/${id}`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newExperience)
    })
    .then((res) => res.json())
    .then(data => { 
      console.log(data)
    });
  }

  

  const [graduations, setGraduations] = useState([])
  const [newGraduation, setNewGraduation] = useState({Curso: "", Instituicao: "", Inicio: "", Fim: ""})

  function addGraduation() {
    setGraduations([...graduations, newGraduation])
    setNewGraduation({Curso: "", Instituicao: "", Inicio: "", Fim: ""})

    fetch(`https://engsoft-jober.azurewebsites.net/UserProfile/Edit/Graduation/${id}`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newGraduation)
    })
    .then((res) => res.json())
    .then(data => { 
      console.log(data)
    });
  }

  const [skills, setSkills] = useState([])
  const [newSkill, setNewSkill] = useState({Skill: "", Nivel: ""})

  function addSkill() {
    setSkills([...skills, newSkill])
    setNewSkill({Skill: "", Nivel: ""})

    fetch(`https://engsoft-jober.azurewebsites.net/UserProfile/Edit/HardSkills/${id}`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newSkill)
    })
    .then((res) => res.json())
    .then(data => { 
      console.log(data)
    });
  }

  const [languages, setLanguages] = useState([])
  const [newLanguage, setNewLanguage] = useState({Lingua: "", Nivel: ""})

  function addLanguage() {
    setLanguages([...languages, newLanguage])
    setNewLanguage({Lingua: "", Nivel: ""})

    fetch(`https://engsoft-jober.azurewebsites.net/UserProfile/Edit/Languages/${id}`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newLanguage)
    })
    .then((res) => res.json())
    .then(data => { 
      console.log(data)
    });
  }
  

  function handleSave(){
    let soft1 = document.getElementById('soft1').innerText;
    let soft2 = document.getElementById('soft2').innerText;
    let soft3 = document.getElementById('soft3').innerText;

    let skills = []
    if (soft1 !==  'Soft Skill 01'){
      skills.push({skill: soft1})
    }
    if (soft2 !==  'Soft Skill 02'){
      skills.push({skill: soft2})
    }
    if (soft3 !==  'Soft Skill 03'){
      skills.push({skill: soft3})
    }

    fetch(`https://engsoft-jober.azurewebsites.net/UserProfile/Edit/SoftSkills/${id}`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(skills)
    })
    .then((res) => res.json())
    .then(data => { 
      console.log(data)
    });


    if(github !== 'GitHub'){
      fetch(`https://engsoft-jober.azurewebsites.net/UserProfile/Edit/Github/${id}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(github)
    })
      .then((res) => res.json())
      .then(data => { 
        console.log(data)
      });
    }
  }

  return (
    <div className="App">
      <header className='header-uprofile'>
          <div className='logo -uprofile'>
            <h1 className='logo-text -uprofile'>J</h1>
            <h1 className='logo-text -uprofile'>o</h1>
            <h1 className='logo-text -uprofile'>b</h1>
            <h1 className='logo-text -uprofile'>e</h1>
            <h1 className='logo-text -uprofile'>r</h1>
        </div>
      </header>

      <main className='positions'>
        <section className="secao-1">
            <div className='img-user'>
              <p className='img-text'>NS</p>
            </div>
            <h2 className='subtitle'>{NomeSobrenome}</h2>
            <p contenteditable="true" className='input-soft' onChange={e => setGithub(e.target.value)}>{github}</p>
            <p contenteditable="true" className='input-soft'>{email}</p>
            <h2 className='subtitle'>Soft Skills</h2>
            <p contenteditable="true" id='soft1' className='input-soft'>Soft Skill 01</p>
            <p contenteditable="true" id='soft2' className='input-soft'>Soft Skill 02</p>
            <p contenteditable="true" id='soft3' className='input-soft'>Soft Skill 03</p>
        </section>

        <section>
            <div>
                <div className='div-title'>
                    <h1 className='subtitle'>Minhas Experiências</h1>
                    <div className='div-buttons'>
                        <button className='add-button' onClick={() => addExperience()}><img src={mais} alt="mais" className='image-mais'></img></button>
                        <button className='exclude-button' onClick={() => {
                            var temp = [...experiences]
                            temp.splice(temp.length-1, temp.length);
                            setExperiences(temp);
                        }}><img src={mais} alt="menos" className='image-menos'></img></button>   
                    </div>   
                </div>
                <form className='profile-box'>
                    <div className='div-profile'>
                        <input className='input-box' value={newExperience.Cargo} placeholder='Cargo' type='text' onChange={e => setNewExperience({...newExperience, Cargo: e.target.value})}></input>
                        <input className='input-box' value={newExperience.Empresa} placeholder='Empresa' type='text' onChange={e => setNewExperience({...newExperience, Empresa: e.target.value})}></input>
                    </div>
                    <div className='div-profile'>
                      <div className='column-profile'>
                        <h3 className='data-text'>De:</h3>
                        <input className='input-box -data' value={newExperience.Inicio} type='date' onChange={e => setNewExperience({...newExperience, Inicio: e.target.value})}></input>
                      </div>
                      <div className='column-profile'>
                        <h3 className='data-text'>Até:</h3>
                        <input className='input-box -data' value={newExperience.Fim} type='date' onChange={e => setNewExperience({...newExperience, Fim: e.target.value})}></input>
                      </div>
                    </div>
                    <ul>
                        {experiences.map(item => <li className='list'><p>{item.Cargo} {item.Empresa} {item.Inicio} {item.Fim}</p></li>)}
                    </ul>
                </form>
            </div>
            <div>
                <div className='div-title'>
                  <h1 className='subtitle'>Minha Formação</h1> 
                  <div className='div-buttons'>
                    <button className='add-button' onClick={() => addGraduation()}><img src={mais} alt="mais" className='image-mais'></img></button>
                    <button className='exclude-button' onClick={() => {
                        var temp = [...graduations]
                        temp.splice(temp.length-1, temp.length);
                        setGraduations(temp);
                    }}><img src={mais} alt="menos" className='image-menos'></img></button>
                    </div>
                </div>
                <form className='profile-box'>  
                    <div className='div-profile'>  
                        <input className='input-box' value={newGraduation.Curso} placeholder='Curso' type='text' onChange={e => setNewGraduation({...newGraduation, Curso: e.target.value})}></input>
                        <input className='input-box' value={newGraduation.Instituicao} placeholder='Instituição' type='text' onChange={e => setNewGraduation({...newGraduation, Instituicao: e.target.value})}></input>
                    </div>
                    <div className='div-profile'> 
                      <div className='column-profile'>
                          <h3 className='data-text'>De:</h3>
                          <input className='input-box -data' value={newGraduation.Inicio} placeholder='Inicio' type='date' onChange={e => setNewGraduation({...newGraduation, Inicio: e.target.value})}></input>
                      </div>
                      <div className='column-profile'>
                          <h3 className='data-text'>Até:</h3>
                          <input className='input-box -data' value={newGraduation.Fim} placeholder='Fim' type='date' onChange={e => setNewGraduation({...newGraduation, Fim: e.target.value})}></input>
                      </div>
                    </div>
                    <ul>
                        {graduations.map(item => <li className='list'><p>{item.Curso} {item.Instituicao} {item.Inicio} {item.Fim}</p></li>)}
                    </ul>
                </form>
            </div>
        </section>

        <section>
            <div> 
                <div className='div-title'>
                    <h1 className='subtitle'>Hard Skills</h1> 
                    <div className='div-buttons'>
                      <button className='add-button' onClick={() => addSkill()}><img src={mais} alt="mais" className='image-mais'></img></button>
                      <button className='exclude-button' onClick={() => {
                          var temp = [...skills];
                          temp.splice(temp.length-1, temp.length);
                          setSkills(temp);
                      }}><img src={mais} alt="menos" className='image-menos'></img></button>
                    </div>
                </div>
                <form className='skills-box'>
                    <div> 
                      <input className='input-box -hards-idiomas' value={newSkill.Skill} placeholder='Skill' type='text' onChange={e => setNewSkill({...newSkill, Skill: e.target.value})}></input>
                      <select className='select-list' value={newSkill.Nivel} onChange={e => setNewSkill({...newSkill, Nivel: e.target.value})}>
                        <option value=""></option>
                        <option value="Basico">Básico</option>
                        <option value="Intermediario">Intermediário</option>
                        <option value="Avancado">Avançado</option>
                      </select>
                    </div>
                    <ul>
                        {skills.map(item => <li className='list'><p>{item.Skill} {item.Nivel}</p></li>)}
                    </ul>
                </form>
            </div>
            <div> 
                <div className='div-title'> 
                    <h1 className='subtitle'>Idiomas</h1> 
                    <div className='div-buttons'>
                      <button className='add-button' onClick={() => addLanguage()}><img src={mais} alt="mais" className='image-mais'></img></button>
                      <button className='exclude-button' onClick={() => {
                          var temp = [...languages];
                          temp.splice(temp.length-1, temp.length);
                          setLanguages(temp);
                      }}><img src={mais} alt="menos" className='image-menos'></img></button>
                    </div>
                </div>
                <form className='skills-box'>
                  <div>
                    <input className='input-box -hards-idiomas' value={newLanguage.Lingua} placeholder='Língua' type='text' onChange={e => setNewLanguage({...newLanguage, Lingua: e.target.value})}></input>
                    <select className='select-list' value={newLanguage.Nivel} onChange={e => setNewLanguage({...newLanguage, Nivel: e.target.value})}>
                      <option value=""></option>
                      <option value="Basico">Básico</option>
                      <option value="Intermediario">Intermediário</option>
                      <option value="Avancado">avançado</option>
                    </select>
                  </div>
                    <ul>
                        {languages.map(item => <li className='list'><p>{item.Lingua} {item.Nivel}</p></li>)}
                    </ul>
                </form>
                <button className='save-button' onClick={handleSave} >Salvar</button>
            </div>
        </section>
      </main>
    </div>
  );
}

export default UserProfile;
