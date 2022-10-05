import { useState, useEffect } from 'react';
import Logo from '../components/Logo';

const id = localStorage.getItem('id')

function UserProfile() {
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
      body: JSON.stringify({cargo: newExperience.Cargo, empresa: newExperience.Empresa, inicio: newExperience.Inicio, fim: newExperience.fim})
    })
    .then((res) => res.json())
    .then(data => { 
      console.log(data)
    });
  }

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

  }, []);

  

  const [graduations, setGraduations] = useState([])
  const [newGraduation, setNewGraduation] = useState({Curso: "", Instituicao: "", Inicio: "", Fim: ""})

  function addGraduation() {
    setGraduations([...graduations, newGraduation])
    setNewGraduation({Curso: "", Instituicao: "", Inicio: "", Fim: ""})
  }
  const [skills, setSkills] = useState([])
  const [newSkill, setNewSkill] = useState({Skill: "", Nivel: ""})

  function addSkill() {
    setSkills([...skills, newSkill])
    setNewSkill({Skill: "", Nivel: ""})
  }

  const [languages, setLanguages] = useState([])
  const [newLanguage, setNewLanguage] = useState({Lingua: "", Nivel: ""})

  function addLanguage() {
    setLanguages([...languages, newLanguage])
    setNewLanguage({Lingua: "", Nivel: ""})
  }

  return (
    <body className="App">
      <header>
        <Logo/>
      </header>

      <main className='wraper'>
        <section>
            <div className='circulo'></div>
            <h2>Nome Sobrenome</h2>
            <p contenteditable="true">GitHub</p>
            <p contenteditable="true">E-mail</p>
            <h2>Nome Sobrenome</h2>
            <p contenteditable="true">Soft Skill 01</p>
            <p contenteditable="true">Soft Skill 02</p>
            <p contenteditable="true">Soft Skill 03</p>
            <button className='enter-button' >Salvar</button>
        </section>

        <section>
            <div>
                <h1>Minhas Experiências</h1>
                <button className='' onClick={() => {
                    var temp = [...experiences]
                    temp.splice(temp.length-1, temp.length);
                    setExperiences(temp);
                }}>x</button>
                <button className='' onClick={() => addExperience()}>+</button>
                <input className='input-class' value={newExperience.Cargo} placeholder='Cargo' type='text' onChange={e => setNewExperience({...newExperience, Cargo: e.target.value})}></input>
                <input className='input-class' value={newExperience.Empresa} placeholder='Empresa' type='text' onChange={e => setNewExperience({...newExperience, Empresa: e.target.value})}></input>
                <input className='input-class' value={newExperience.Inicio} placeholder='Inicio' type='date' onChange={e => setNewExperience({...newExperience, Inicio: e.target.value})}></input>
                <input className='input-class' value={newExperience.Fim} placeholder='Fim' type='date' onChange={e => setNewExperience({...newExperience, Fim: e.target.value})}></input>
                <ul>
                    {experiences.map((item, index) => <li key={index}><p>{item.Cargo} {item.Empresa} {item.Inicio} {item.Fim}</p></li>)}
                </ul>
            </div>
            <div>
                <h1>Minha Formação</h1> 
                <button className='' onClick={() => {
                    var temp = [...graduations]
                    temp.splice(temp.length-1, temp.length);
                    setGraduations(temp);
                }}>x</button>
                <button className='' onClick={() => addGraduation()}>+</button>
                <input className='input-class' value={newGraduation.Curso} placeholder='Curso' type='text' onChange={e => setNewGraduation({...newGraduation, Curso: e.target.value})}></input>
                <input className='input-class' value={newGraduation.Instituicao} placeholder='Instituição' type='text' onChange={e => setNewGraduation({...newGraduation, Instituicao: e.target.value})}></input>
                <input className='input-class' value={newGraduation.Inicio} placeholder='Inicio' type='date' onChange={e => setNewGraduation({...newGraduation, Inicio: e.target.value})}></input>
                <input className='input-class' value={newGraduation.Fim} placeholder='Fim' type='date' onChange={e => setNewGraduation({...newGraduation, Fim: e.target.value})}></input>
                <ul>
                    {graduations.map(item => <li><p>{item.Curso} {item.Instituicao} {item.Inicio} {item.Fim}</p></li>)}
                </ul>
            </div>
        </section>

        <section>
            <div> 
                <h1>Hard Skills</h1> 
                <button className='' onClick={() => {
                    var temp = [...skills];
                    temp.splice(temp.length-1, temp.length);
                    setSkills(temp);
                }}>x</button>
                <button className='' onClick={() => addSkill()}>+</button>
                <input className='input-class' value={newSkill.Skill} placeholder='Skill' type='text' onChange={e => setNewSkill({...newSkill, Skill: e.target.value})}></input>
                <select value={newSkill.Nivel} onChange={e => setNewSkill({...newSkill, Nivel: e.target.value})}>
                  <option value=""></option>
                  <option value="Basico">Básico</option>
                  <option value="Intermediario">Intermediário</option>
                  <option value="Avancado">avançado</option>
                </select>
                <ul>
                    {skills.map(item => <li><p>{item.Skill} {item.Nivel}</p></li>)}
                </ul>
            </div>
            <div>  
              <h1>Idiomas</h1> 
                <button className='' onClick={() => {
                    var temp = [...languages];
                    temp.splice(temp.length-1, temp.length);
                    setLanguages(temp);
                }}>x</button>
                <button className='' onClick={() => addLanguage()}>+</button>
                <input className='input-class' value={newLanguage.Lingua} placeholder='Ligua' type='text' onChange={e => setNewLanguage({...newLanguage, Lingua: e.target.value})}></input>
                <select value={newLanguage.Nivel} onChange={e => setNewLanguage({...newLanguage, Nivel: e.target.value})}>
                  <option value=""></option>
                  <option value="Basico">Básico</option>
                  <option value="Intermediario">Intermediário</option>
                  <option value="Avancado">avançado</option>
                </select>
                <ul>
                    {languages.map(item => <li><p>{item.Lingua} {item.Nivel}</p></li>)}
                </ul>
            </div>
        </section>
      </main>
    </body>
  );
}

export default UserProfile;