import { useState, useEffect } from 'react';
import Logo from '../components/Logo';

const id = localStorage.getItem('id')

function EnterpriseProfile() {
  const [jobs, setJobs] = useState([])
  const [newJob, setNewJob] = useState({Cargo: "", Area: "", SoftSkill1: "",
                                        SoftSkill2: "", SoftSkill3: "", Experiencia: "",
                                        Idioma: "", NivelIdioma: "", Cidade: "",
                                        HardSkill1: "", NivelHS1: "", HardSkill2: "", NivelHS2: "",
                                        HardSkill3: "", NivelHS3: ""})


  function addJob() {
    setJobs([...jobs, newJob])
    setNewJob({Cargo: "", Area: "", SoftSkill1: "",
               SoftSkill2: "", SoftSkill3: "", Experiencia: "",
               Idioma: "", NivelIdioma: "", Cidade: "",
               HardSkill1: "", NivelHS1: "", HardSkill2: "", NivelHS2: "",
               HardSkill3: "", NivelHS3: ""})
    // fetch(`https://engsoft-jober.azurewebsites.net/UserProfile/Edit/Experience/${id}`, {
    //   method: "POST",
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify({cargo: newJob.Cargo, area: newJob.Area, softskill1: newJob.SoftSkill1,
    //                         softskill2: newJob.SoftSkill2, softskill3: newJob.SoftSkill3,
    //                         experiencia: newJob.Experiencia, idioma: newJob.Idioma, nivelIdioma: newJob.NivelIdioma,
    //                         cidade: newJob.Cidade, HardSkill1: newJob.HardSkill1, NivelHS1: newJob.NivelHS1,
    //                         HardSkill2: newJob.HardSkill2, NivelHS2: newJob.NivelHS2,
    //                         HardSkill3: newJob.HardSkill3, NivelHS3: newJob.NivelHS3})
    // })
    // .then((res) => res.json())
    // .then(data => { 
    //   console.log(data)
    // });
  }

//   useEffect(() => {

//     fetch(`https://engsoft-jober.azurewebsites.net/ViewExperiences/${id}`, {
//         method: "GET",
//         headers: {
//           'Content-type': 'application/json'
//         }
//     }).then(res => res.json())
//       .then((data)=> {
//         let i = 0
//         let exp = []
//         for(i=0; i<data.length; i++){
//           let ini_day = (new Date(data[i].INICIO)).getUTCDate()
//           let ini_month = (new Date(data[i].INICIO)).getUTCMonth() + 1
//           let ini_year = (new Date(data[i].INICIO)).getUTCFullYear()
//           let ini = `${ini_year}-${ini_month}-${ini_day}`

//           let fim_day = (new Date(data[i].FIM)).getUTCDate()
//           let fim_month = (new Date(data[i].FIM)).getUTCMonth() + 1
//           let fim_year = (new Date(data[i].FIM)).getUTCFullYear()
//           let fim = `${fim_year}-${fim_month}-${fim_day}`


//           exp.push({Cargo: data[i].CARGO, Empresa: data[i].EMPRESA, Inicio: ini, Fim:fim})
//         }
//         console.log(exp)
//         setJobs(exp)
//     });

//   }, []);

  return (
    <body className="App">
      <header>
        <Logo/>
      </header>

      <main className='wraper'>
        <section>
            <div className='circulo'></div>
            <h2>Nome Sobrenome</h2>
            <p contenteditable="true">Endereço</p>
            <p contenteditable="true">E-mail</p>
            <p contenteditable="true">Contato</p>
            <h2>Quem somos?</h2>
            <p contenteditable="true">Descrição Livre</p>

            <button className='enter-button' >Salvar</button>
        </section>

        <section>
            <div>
                <h1>VagasAbertas</h1>
                <button className='' onClick={() => {
                    var temp = [...jobs]
                    temp.splice(temp.length-1, temp.length);
                    setJobs(temp);
                }}>x</button>
                <button className='' onClick={() => addJob()}>+</button>
                <input className='input-class' value={newJob.Cargo} placeholder='Cargo' type='text' onChange={e => setNewJob({...newJob, Cargo: e.target.value})}></input>
                <input className='input-class' value={newJob.Area} placeholder='Área' type='text' onChange={e => setNewJob({...newJob, Area: e.target.value})}></input>
                <input className='input-class' value={newJob.SoftSkill1} placeholder='Soft Skill 01' type='text' onChange={e => setNewJob({...newJob, SoftSkill1: e.target.value})}></input>
                <input className='input-class' value={newJob.SoftSkill2} placeholder='Soft Skill 02' type='text' onChange={e => setNewJob({...newJob, SoftSkill2: e.target.value})}></input>
                <input className='input-class' value={newJob.SoftSkill3} placeholder='Soft Skill 03' type='text' onChange={e => setNewJob({...newJob, SoftSkill3: e.target.value})}></input>
                <div>
                    <input className='input-class' value={newJob.Experiencia} placeholder='Tempo Experiência' type='text' onChange={e => setNewJob({...newJob, Experiencia: e.target.value})}></input>
                    <p>Meses</p>
                </div>
                <input className='input-class' value={newJob.Idioma} placeholder='Idioma' type='text' onChange={e => setNewJob({...newJob, Idioma: e.target.value})}></input>
                <select value={newJob.NivelIdioma} onChange={e => setNewJob({...newJob, NivelIdioma: e.target.value})}>
                  <option value=""></option>
                  <option value="Basico">Básico</option>
                  <option value="Intermediario">Intermediário</option>
                  <option value="Avancado">avançado</option>
                </select>

                <input className='input-class' value={newJob.Cidade} placeholder='Cidade' type='text' onChange={e => setNewJob({...newJob, Cidade: e.target.value})}></input>
                <input className='input-class' value={newJob.HardSkill1} placeholder='Hard Skill 01' type='text' onChange={e => setNewJob({...newJob, HardSkill1: e.target.value})}></input>
                <select value={newJob.NivelHS1} onChange={e => setNewJob({...newJob, NivelHS1: e.target.value})}>
                  <option value=""></option>
                  <option value="Basico">Básico</option>
                  <option value="Intermediario">Intermediário</option>
                  <option value="Avancado">avançado</option>
                </select>

                <input className='input-class' value={newJob.HardSkill2} placeholder='Hard Skill 01' type='text' onChange={e => setNewJob({...newJob, HardSkill2: e.target.value})}></input>
                <select value={newJob.NivelHS2} onChange={e => setNewJob({...newJob, NivelHS2: e.target.value})}>
                  <option value=""></option>
                  <option value="Basico">Básico</option>
                  <option value="Intermediario">Intermediário</option>
                  <option value="Avancado">avançado</option>
                </select>

                <input className='input-class' value={newJob.HardSkill3} placeholder='Cargo' type='text' onChange={e => setNewJob({...newJob, HardSkill3: e.target.value})}></input>
                <select value={newJob.NivelHS3} onChange={e => setNewJob({...newJob, NivelHS3: e.target.value})}>
                  <option value=""></option>
                  <option value="Basico">Básico</option>
                  <option value="Intermediario">Intermediário</option>
                  <option value="Avancado">avançado</option>
                </select>

                <ul>
                    {jobs.map((item, index) => <li key={index}><p>{item.Cargo} {item.Area} {item.SoftSkill1} {item.Idioma}
                                                {item.NivelIdioma} {item.Cidade} {item.HardSkill1} {item.NivelHS1} {item.HardSkill2}
                                                {item.NivelHS2} {item.HardSkill3} {item.NivelHS3}</p></li>)}
                </ul>
            </div>
        </section>
      </main>
    </body>
  );
}

export default EnterpriseProfile;