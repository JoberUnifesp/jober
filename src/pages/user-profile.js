import { useState, useEffect } from 'react';
import mais from '../assets/mais.png'
import './user-profile.css';
import { Link } from 'react-router-dom';

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
    if (newExperience.Cargo !== "" && newExperience.Empresa !== "" && newExperience.Inicio !== "" && newExperience.Fim !== "") {
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
  }

  

  const [graduations, setGraduations] = useState([])
  const [newGraduation, setNewGraduation] = useState({Curso: "", Instituicao: "", Inicio: "", Fim: ""})

  function addGraduation() {
    if(newGraduation.Curso !== "" && newGraduation.Fim !== "" && newGraduation.Inicio !== "" && newGraduation.Fim !== "") {
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
  }

  const [skills, setSkills] = useState([])
  const [newSkill, setNewSkill] = useState({Skill: "", Nivel: ""})

  function addSkill() {
    if (newSkill.Skill !== "" && newSkill.Nivel !== "") {
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
  }

  const [languages, setLanguages] = useState([])
  const [newLanguage, setNewLanguage] = useState({Lingua: "", Nivel: ""})

  function addLanguage() {
    if (newLanguage.Lingua !== "" && newLanguage.Nivel !== "") {
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
    if (newSoftSkill !== "") {
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
  }

  return (
    <div className="uProfile-screen">
      <header className='header'>
        <div className='logo-menu'>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.719 51.5866C13.9814 51.5866 11.5371 51 9.3861 49.8267C7.27422 48.6144 5.6121 46.9522 4.39973 44.8404C3.22647 42.6894 2.63984 40.2451 2.63984 37.5075C2.63984 36.608 2.93315 35.8845 3.51979 35.337C4.10642 34.7503 4.82993 34.457 5.69032 34.457C6.58982 34.457 7.31333 34.7503 7.86086 35.337C8.44749 35.8845 8.7408 36.608 8.7408 37.5075C8.7408 40.0104 9.48387 42.0637 10.97 43.6671C12.4561 45.2706 14.3725 46.0723 16.719 46.0723C19.0655 46.0723 20.9818 45.2706 22.468 43.6671C23.9932 42.0637 24.7558 40.0104 24.7558 37.5075V8.2346C24.7558 7.3351 25.0296 6.61159 25.5771 6.06407C26.1637 5.47744 26.8873 5.18412 27.7476 5.18412C28.6471 5.18412 29.3902 5.47744 29.9768 6.06407C30.5635 6.61159 30.8568 7.3351 30.8568 8.2346V37.5075C30.8568 40.2451 30.2506 42.6894 29.0382 44.8404C27.8259 46.9522 26.1442 48.6144 23.9932 49.8267C21.8813 51 19.4566 51.5866 16.719 51.5866Z" fill="white"/>
            <path d="M117.244 43.3183C117.244 44.0614 116.99 44.6871 116.482 45.1956C115.973 45.6649 115.328 45.8995 114.546 45.8995H92.254C92.6842 48.6371 93.9161 50.8468 95.9497 52.5284C98.0225 54.2101 100.545 55.051 103.517 55.051C104.691 55.051 105.903 54.8359 107.154 54.4057C108.445 53.9755 109.501 53.4475 110.322 52.8218C110.87 52.3916 111.515 52.1765 112.258 52.1765C113.001 52.1765 113.588 52.372 114.018 52.7631C114.722 53.3497 115.074 54.0146 115.074 54.7576C115.074 55.4616 114.761 56.0482 114.135 56.5175C112.806 57.5735 111.143 58.4339 109.149 59.0987C107.194 59.7636 105.316 60.096 103.517 60.096C100.31 60.096 97.4359 59.4116 94.8938 58.0428C92.3517 56.6349 90.3572 54.699 88.9102 52.2351C87.5023 49.7713 86.7983 46.975 86.7983 43.8463C86.7983 40.7176 87.4632 37.9213 88.7929 35.4575C90.1617 32.9545 92.0389 31.0186 94.4245 29.6498C96.8493 28.2419 99.5869 27.538 102.637 27.538C105.649 27.538 108.249 28.2028 110.44 29.5325C112.63 30.8622 114.311 32.7199 115.485 35.1055C116.658 37.4911 117.244 40.2287 117.244 43.3183ZM102.637 32.583C99.7824 32.583 97.4554 33.3652 95.6564 34.9295C93.8965 36.4939 92.7819 38.5862 92.3126 41.2065H111.847C111.495 38.5862 110.518 36.4939 108.914 34.9295C107.311 33.3652 105.219 32.583 102.637 32.583Z" fill="white"/>
            <path d="M131.384 19.2409C133.456 19.2409 135.079 19.5538 136.253 20.1796C137.426 20.8053 138.013 21.5875 138.013 22.5261C138.013 22.7998 137.993 22.9954 137.954 23.1127C137.602 24.3642 136.82 24.9899 135.607 24.9899C135.412 24.9899 135.119 24.9508 134.728 24.8726C133.163 24.5988 131.892 24.462 130.914 24.462C128.099 24.462 125.83 25.1073 124.109 26.3978C122.389 27.6884 121.528 29.4288 121.528 31.6189V48.7485C121.528 49.6871 121.274 50.4106 120.766 50.919C120.296 51.4274 119.573 51.6816 118.595 51.6816C117.657 51.6816 116.933 51.447 116.425 50.9777C115.916 50.4693 115.662 49.7262 115.662 48.7485V22.5261C115.662 21.5875 115.916 20.864 116.425 20.3555C116.933 19.8471 117.657 19.5929 118.595 19.5929C120.551 19.5929 121.528 20.5706 121.528 22.5261V23.6407C122.702 22.2719 124.149 21.1964 125.869 20.4142C127.59 19.632 129.428 19.2409 131.384 19.2409Z" fill="white"/>
            <path d="M43.6859 60.096C40.5572 60.096 37.7609 59.4116 35.297 58.0428C32.8332 56.6349 30.9169 54.699 29.548 52.2351C28.1792 49.7713 27.4948 46.975 27.4948 43.8463C27.4948 40.6785 28.1792 37.8627 29.548 35.3988C30.9169 32.935 32.8332 31.0186 35.297 29.6498C37.7609 28.2419 40.5572 27.538 43.6859 27.538C46.7754 27.538 49.5326 28.2419 51.9574 29.6498C54.4212 31.0186 56.3375 32.935 57.7063 35.3988C59.1143 37.8627 59.8182 40.6785 59.8182 43.8463C59.8182 46.975 59.1338 49.7713 57.765 52.2351C56.3962 54.699 54.4799 56.6349 52.016 58.0428C49.5913 59.4116 46.8146 60.096 43.6859 60.096ZM43.6859 54.8163C45.6804 54.8163 47.4598 54.347 49.0242 53.4084C50.6277 52.4698 51.8596 51.1792 52.72 49.5366C53.6195 47.8549 54.0692 45.9582 54.0692 43.8463C54.0692 41.7344 53.6195 39.8377 52.72 38.156C51.8596 36.4743 50.6277 35.1642 49.0242 34.2256C47.4598 33.2869 45.6804 32.8176 43.6859 32.8176C41.6913 32.8176 39.8923 33.2869 38.2888 34.2256C36.7245 35.1642 35.4926 36.4743 34.5931 38.156C33.6936 39.8377 33.2438 41.7344 33.2438 43.8463C33.2438 45.9582 33.6936 47.8549 34.5931 49.5366C35.4926 51.1792 36.7245 52.4698 38.2888 53.4084C39.8923 54.347 41.6913 54.8163 43.6859 54.8163Z" fill="white"/>
            <path d="M74.3906 19.3583C77.2064 19.3583 79.7485 20.0622 82.0168 21.4701C84.3242 22.8781 86.1232 24.8335 87.4138 27.3365C88.7435 29.8003 89.4083 32.5575 89.4083 35.608C89.4083 38.6584 88.7044 41.4352 87.2965 43.9381C85.8886 46.402 83.9331 48.3574 81.4302 49.8044C78.9663 51.2123 76.2287 51.9163 73.2173 51.9163C70.206 51.9163 67.4683 51.2123 65.0045 49.8044C62.5798 48.3574 60.6439 46.402 59.1968 43.9381C57.7889 41.4352 57.085 38.6584 57.085 35.608V8.85758C57.085 7.95808 57.3587 7.23457 57.9063 6.68704C58.4929 6.13952 59.2164 5.86576 60.0768 5.86576C60.9763 5.86576 61.6998 6.13952 62.2473 6.68704C62.7949 7.23457 63.0686 7.95808 63.0686 8.85758V24.6966C64.4374 23.0149 66.0995 21.7048 68.055 20.7662C70.0104 19.8276 72.1223 19.3583 74.3906 19.3583ZM73.2173 46.6366C75.1728 46.6366 76.9327 46.1673 78.497 45.2287C80.1005 44.251 81.3519 42.9213 82.2514 41.2396C83.1901 39.5579 83.6594 37.6807 83.6594 35.608C83.6594 33.5352 83.1901 31.6775 82.2514 30.035C81.3519 28.3533 80.1005 27.0431 78.497 26.1045C76.9327 25.1268 75.1728 24.638 73.2173 24.638C71.2619 24.638 69.4824 25.1268 67.879 26.1045C66.3146 27.0431 65.0827 28.3533 64.1832 30.035C63.2837 31.6775 62.834 33.5352 62.834 35.608C62.834 37.6807 63.2837 39.5579 64.1832 41.2396C65.0827 42.9213 66.3146 44.251 67.879 45.2287C69.4824 46.1673 71.2619 46.6366 73.2173 46.6366Z" fill="white"/>
          </svg>
        </div>
        <div className='header-links'>
          <Link to='/jober/profile' className='menu-link'>Perfil</Link>
          <Link to='JobVacancies' className='menu-link'>Vagas</Link>
          <Link to='/jober/' className='menu-link'>Chat</Link>
          <Link to='/jober/' className='menu-link'>Logout</Link>
        </div>
      </header>

      <main className='sections'>
        <section className='section-1'>
          <div className="skills-box -s1">
            <div className='img-user'>
              <p className='img-text'>NS</p>
            </div>
            <h2 className='div-title-text'>{NomeSobrenome}</h2>
            <p contentEditable="true" id="github" className='input-soft -editable'>{github}</p>
            <p contentEditable="true" id="email" className='input-soft -editable'>{email}</p>
          </div>  
          
          <div className='div-title'>
              <h1 className='div-title-text'>Soft Skills</h1> 
              <div className='div-buttons-profile'>
                <button className='add-button' onClick={() => addSoftSkill()}><img src={mais} alt="mais" className='image-mais'></img></button>
                <button className='exclude-button' onClick={handleSoftSkillExclusion}><img src={mais} alt="menos" className='image-menos'></img></button>
              </div>
          </div>
          <div className='skills-box -s1'>
              <select className='input-box -soft' value={newSoftSkill} onChange={e => setNewSoftSkill(e.target.value)}>
                <option value="" disabled selected>Skill</option>
                <option value="Conversação">Conversação</option>
                <option value="Organização">Organização</option>
                <option value="Adaptabilidade">Adaptabilidade</option>
                <option value="Trabalho em equipe">Trabalho em equipe</option>
                <option value="Criatividade">Criatividade</option>
                <option value="Proatividade">Proatividade</option>
              </select>
              {softSkills.map(item =>
                <div className='box'>
                <p className='input-box -soft -map'>{item}</p>
              </div>)}
          </div>

          
        </section>

        <section className='section-2'>
            <div>
                <div className='div-title'>
                    <h1 className='div-title-text'>Minhas Experiências</h1>
                    <div className='div-buttons-profile'>
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
                  <h1 className='div-title-text'>Minha formação</h1> 
                  <div className='div-buttons-profile'>
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
                    <h1 className='div-title-text'>Hard Skills</h1> 
                    <div className='div-buttons-profile'>
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
                    <h1 className='div-title-text'>Idiomas</h1> 
                    <div className='div-buttons-profile'>
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