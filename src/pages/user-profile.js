import { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import mais from '../assets/mais.png'
import './user-profile.css';

function UserProfile() {
  const id = sessionStorage.getItem('meuid')
  const base_url = 'https://jober.azurewebsites.net'


  const [github, setGithub] = useState('GitHub')
  const [NomeSobrenome, setNomeSobrenome] = useState('Nome Sobrenome')
  const [email, setEmail] = useState('Email')


  useEffect(() => {

    fetch(`${base_url}/UserProfile/ViewExperiences/${id}`, {
        method: "GET",
        headers: {
          'Content-type': 'application/json'
        }
    }).then(res => res.json())
      .then((data)=> {
        if(data !== null){
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

          setExperiences(exp)

        }
  
    });

    fetch(`${base_url}/UserProfile/ViewGraduations/${id}`, {
        method: "GET",
        headers: {
          'Content-type': 'application/json'
        }
    }).then(res => res.json())
      .then((data)=> {
        if (data !== null){
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
  
          setGraduations(GRADUATIONS)
        }
    });


    fetch(`${base_url}/UserProfile/ViewHardSkills/${id}`, {
        method: "GET",
        headers: {
          'Content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then((data)=> {
      if (data !== null){
        let i = 0
        let HARDSKILLS = []
        for(i=0; i<data.length; i++){
          HARDSKILLS.push({Skill: data[i].NOME, Nivel:  data[i].NIVEL})
        }
  
        setSkills(HARDSKILLS)
      }
    });

    fetch(`${base_url}/UserProfile/ViewLanguages/${id}`, {
        method: "GET",
        headers: {
          'Content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then((data)=> {
      if(data !== null){
        let i = 0
        let LANGUAGES = []
        for(i=0; i<data.length; i++){
          LANGUAGES.push({Lingua: data[i].NOME, Nivel:  data[i].NIVEL})
        }
        setLanguages(LANGUAGES)
      }
    });

    fetch(`${base_url}/UserProfile/github/${id}`, {
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

    fetch(`${base_url}/UserProfile/NomeSobrenome/${id}`, {
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

    fetch(`${base_url}/UserProfile/email/${id}`, {
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

    fetch(`${base_url}/UserProfile/ViewSoftSkills/${id}`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((data)=> {
      if (data !== null){
        setSoftSkills(data)
      }
    })

  }, []);

  
  
  const [experiences, setExperiences] = useState([])
  const [newExperience, setNewExperience] = useState({Cargo: "", Empresa: "", Inicio: "", Fim: ""})

  function addExperience() {
    setExperiences([...experiences, newExperience])
    setNewExperience({Cargo: "", Empresa: "", Inicio: "", Fim: ""})

    fetch(`${base_url}/UserProfile/Edit/Experience/${id}`, {
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

    fetch(`${base_url}/UserProfile/Edit/Graduation/${id}`, {
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

    fetch(`${base_url}/UserProfile/Edit/HardSkills/${id}`, {
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

    fetch(`${base_url}/UserProfile/Edit/Languages/${id}`, {
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

    setGithub(document.getElementById('github').innerText);
    console.log(github)

    if(github !== 'GitHub'){
      fetch(`${base_url}/UserProfile/Edit/Github/${id}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({github: github})
    })
      .then((res) => res.json())
      .then(data => { 
        console.log(data)
      });
    }

    setEmail(document.getElementById('email').innerText);
    console.log(email)
      fetch(`${base_url}/UserProfile/Edit/Email/${id}`, {
        method: "PUT",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({email: email})
      })
        .then((res) => res.json())
        .then(data => { 
          console.log(data)
        });
  }

  function handleExperienceExclusion(){
    var temp = [...experiences]
    temp.splice(temp.length-1, temp.length);
    setExperiences(temp);

    fetch(`${base_url}/UserProfile/Delete/Experience/${id}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => console.log(data))

  }


  const [softSkills, setSoftSkills] = useState([])
  const [newSoftSkill, setNewSoftSkill] = useState("")

  function handleSoftSkillExclusion(){
    var temp = [...softSkills]
    temp.splice(temp.length-1, temp.length);
    setSoftSkills(temp);

    fetch(`${base_url}/UserProfile/Delete/SoftSkill/${id}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  function handleHardSkillExclusion(){
    var temp = [...skills];
    temp.splice(temp.length-1, temp.length);
    setSkills(temp);

    fetch(`${base_url}/UserProfile/Delete/HardSkill/${id}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))

  }

  function handleLanguageExclusion(){
    var temp = [...languages];
    temp.splice(temp.length-1, temp.length);
    setLanguages(temp);

    fetch(`${base_url}/UserProfile/Delete/Language/${id}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  function handleGraduationExclusion(){
    var temp = [...graduations]
    temp.splice(temp.length-1, temp.length);
    setGraduations(temp);

    fetch(`${base_url}/UserProfile/Delete/Graduation/${id}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))

  }

  function addSoftSkill() {
    setSoftSkills([...softSkills, newSoftSkill])
    setNewSoftSkill("")

    fetch(`${base_url}/UserProfile/Edit/SoftSkills/${id}`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({skill: newSoftSkill})
    })
    .then((res) => res.json())
    .then(data => { 
      console.log(data)
    });
  }

  return (
    <div className="uProfile-screen">
      <header className='header-uprofile'>
          <div className='logo -uprofile'>
            <h1 className='logo-text -uprofile'>J</h1>
            <h1 className='logo-text -uprofile'>o</h1>
            <h1 className='logo-text -uprofile'>b</h1>
            <h1 className='logo-text -uprofile'>e</h1>
            <h1 className='logo-text -uprofile'>r</h1>
        </div>
      </header>

      <main className='sections'>
        <section className='section-1'>
          <div className="skills-box -s1">
            <div className='img-user'>
              <p className='img-text'>NS</p>
            </div>
            <h2 className='subtitle'>{NomeSobrenome}</h2>
            <p contentEditable="true" id="github" className='input-soft -editable'>{github}</p>
            <p contentEditable="true" id="email" className='input-soft -editable'>{email}</p>
          </div>  
          
          <div className='div-title'>
              <h1 className='subtitle'>Soft Skills</h1> 
              <div className='div-buttons'>
                <button className='add-button' onClick={() => addSoftSkill()}><img src={mais} alt="mais" className='image-mais'></img></button>
                <button className='exclude-button' onClick={handleSoftSkillExclusion}><img src={mais} alt="menos" className='image-menos'></img></button>
              </div>
          </div>
          <div className='skills-box -s1'>
              <select className='input-box -soft' value={newSoftSkill} onChange={e => setNewSoftSkill(e.target.value)}>
                <option value="" disabled selected>Skill</option>
                <option value="Conversação">Conversação"</option>
                <option value="Organização">Organização</option>
                <option value="Adaptabilidade">Adaptabilidade</option>
                <option value="Trabalho em equipe">Trabalho em equipe</option>
                <option value="Criatividade">Criatividade</option>
                <option value="Proatividade">Proatividade</option>
              </select>
          </div>

          {softSkills.map(item =>
          <div className='skills-box -s1'>
              <p className='input-box -soft -map'>{item}</p>
          </div>)}
        </section>

        <section className='section-2'>
            <div>
                <div className='div-title'>
                    <h1 className='subtitle'>Minhas Experiências</h1>
                    <div className='div-buttons'>
                        <button className='add-button' onClick={() => addExperience()}><img src={mais} alt="mais" className='image-mais'></img></button>
                        <button className='exclude-button' onClick={handleExperienceExclusion}><img src={mais} alt="menos" className='image-menos'></img></button>   
                    </div>   
                </div>
                <div className='profile-box'>
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
                </div>
                {experiences.map(item => 
                <div className='profile-box'>
                    <div className='div-profile'>
                        <p className='input-box -map'>{item.Cargo}</p>
                        <p className='input-box -map'>{item.Empresa}</p>
                    </div>
                    <div className='div-profile'>
                      <div className='column-profile'>
                        <h3 className='data-text'>De:</h3>
                        <p className='input-box -data -map'>{item.Inicio}</p>
                      </div>
                      <div className='column-profile'>
                        <h3 className='data-text'>Até:</h3>
                        <p className='input-box -data -map'>{item.Fim}</p>
                      </div>
                    </div>
                </div>)}
            </div>
            <div>
                <div className='div-title'>
                  <h1 className='subtitle'>Minha formação</h1> 
                  <div className='div-buttons'>
                    <button className='add-button' onClick={() => addGraduation()}><img src={mais} alt="mais" className='image-mais'></img></button>
                    <button className='exclude-button' onClick={handleGraduationExclusion}><img src={mais} alt="menos" className='image-menos'></img></button>
                    </div>
                </div>
                <div className='profile-box'>  
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
                </div>
                {graduations.map(item => 
                <div className='profile-box'>  
                    <div className='div-profile'>  
                        <p className='input-box -map'>{item.Curso}</p>
                        <p className='input-box -map'>{item.Instituicao}</p>
                    </div>
                    <div className='div-profile'> 
                      <div className='column-profile'>
                          <h3 className='data-text'>De:</h3>
                          <p className='input-box -data -map'>{item.Inicio}</p>
                      </div>
                      <div className='column-profile'>
                          <h3 className='data-text'>Até:</h3>
                          <p className='input-box -data -map' type='date'>{item.Fim}</p>
                      </div>
                    </div>
                </div>)}
            </div>
        </section>

        <section className='section-3'>
            <div> 
                <div className='div-title'>
                    <h1 className='subtitle'>Hard Skills</h1> 
                    <div className='div-buttons'>
                      <button className='add-button' onClick={() => addSkill()}><img src={mais} alt="mais" className='image-mais'></img></button>
                      <button className='exclude-button' onClick={handleHardSkillExclusion}><img src={mais} alt="menos" className='image-menos'></img></button>
                    </div>
                </div>
                <div className='skills-box'>
                    <div className='skills-map'> 
                      <input className='input-box -hards-idiomas' value={newSkill.Skill} placeholder='Skill' type='text' onChange={e => setNewSkill({...newSkill, Skill: e.target.value})}></input>
                      <select className='select-list' value={newSkill.Nivel} onChange={e => setNewSkill({...newSkill, Nivel: e.target.value})}>
                        <option value=""></option>
                        <option value="Basico">Básico</option>
                        <option value="Intermediario">Intermediário</option>
                        <option value="Avancado">Avançado</option>
                      </select>
                    </div>
                </div>
                {skills.map(item =>
                <div className='skills-box'>
                  <div className='skills-map'> 
                    <p className='input-box -hards-idiomas'>{item.Skill}</p>
                    <p className='select-list -map'>{item.Nivel}</p>
                  </div>
                </div>)}
            </div>
            <div> 
                <div className='div-title'> 
                    <h1 className='subtitle'>Idiomas</h1> 
                    <div className='div-buttons'>
                      <button className='add-button' onClick={() => addLanguage()}><img src={mais} alt="mais" className='image-mais'></img></button>
                      <button className='exclude-button' onClick={handleLanguageExclusion}><img src={mais} alt="menos" className='image-menos'></img></button>
                    </div>
                </div>
                <div className='skills-box'>
                  <div className='skills-map'>
                    <input className='input-box -hards-idiomas' value={newLanguage.Lingua} placeholder='Língua' type='text' onChange={e => setNewLanguage({...newLanguage, Lingua: e.target.value})}></input>
                    <select className='select-list' value={newLanguage.Nivel} onChange={e => setNewLanguage({...newLanguage, Nivel: e.target.value})}>
                      <option value=""></option>
                      <option value="Basico">Básico</option>
                      <option value="Intermediario">Intermediário</option>
                      <option value="Avancado">avançado</option>
                    </select>
                  </div>
                </div>
                {languages.map(item => 
                <div className='skills-box'>
                  <div className='skills-map'>
                    <p className='input-box -hards-idiomas'>{item.Lingua}</p>
                    <p className='select-list -map'>{item.Nivel}</p>
                  </div>
                </div>)}
                
                <button className='save-button' onClick={handleSave} >Salvar</button>
            </div>
        </section>
      </main>
    </div>
  );
}

export default UserProfile;
