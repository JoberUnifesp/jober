import { useState } from 'react';
import Logo from '../components/Logo';

function UserProfile() {
  const [experiences, setExperiences] = useState([])
  const [newExperience, setNewExperience] = useState({Cargo: "", Empresa: "", Inicio: "", Fim: ""})

  function addExperience() {
    setExperiences([...experiences, newExperience])
    setNewExperience({Cargo: "", Empresa: "", Inicio: "", Fim: ""})
  }

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
    setNewSkill({Lingua: "", Nivel: ""})
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
                    {experiences.map(item => <li><p>{item.Cargo} {item.Empresa} {item.Inicio} {item.Fim}</p></li>)}
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
                    setNewLanguage({...newSkill, Nivel: document.getElementById('dataListHS').value});
                    var temp = [...skills];
                    temp.splice(temp.length-1, temp.length);
                    setSkills(temp);
                }}>x</button>
                <button className='' onClick={() => addSkill()}>+</button>
                <input className='input-class' value={newSkill.Skill} placeholder='Skill' type='text' onChange={e => setNewSkill({...newSkill, Skill: e.target.value})}></input>
                <datalist id="dataListHS">
                  <option value="Basico"/>
                  <option value="Intermediario"/>
                  <option value="Avancado"/>
                </datalist>
                <ul>
                    {graduations.map(item => <li><p>{item.Skill} {item.Nivel}</p></li>)}
                </ul>
            </div>
            <div>  
              <h1>Idiomas</h1> 
                <button className='' onClick={() => {
                    setNewLanguage({...newLanguage, Nivel: document.getElementById('dataListL').value});
                    var temp = [...languages];
                    temp.splice(temp.length-1, temp.length);
                    setLanguages(temp);
                }}>x</button>
                <button className='' onClick={() => addLanguage()}>+</button>
                <input className='input-class' value={newLanguage.Lingua} placeholder='Ligua' type='text' onChange={e => setNewLanguage({...newLanguage, Lingua: e.target.value})}></input>
                <datalist id="dataListL">
                  <option value="Basico"/>
                  <option value="Intermediario"/>
                  <option value="Avancado"/>
                </datalist>
                <ul>
                    {graduations.map(item => <li><p>{item.Lingua} {item.Nivel}</p></li>)}
                </ul>
            </div>
        </section>
      </main>
    </body>
  );
}

export default UserProfile;