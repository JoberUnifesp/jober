import { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import './enterprise-profile.css';
import mais from '../assets/mais.png';

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
    <>
      <div className="eprofile">
        <header className='header-eprofile'>
            <div className='logo -eprofile'>
              <h1 className='logo-text -eprofile'>J</h1>
              <h1 className='logo-text -eprofile'>o</h1>
              <h1 className='logo-text -eprofile'>b</h1>
              <h1 className='logo-text -eprofile'>e</h1>
              <h1 className='logo-text -eprofile'>r</h1>
          </div>
        </header>

        <main className='info-eprofile'>
          <section className='secao-eprofile'>
              <div className='img-eprofile'><p className='img-text-eprofile'>NS</p></div>
              <h2 className='subtitle-eprofile'>Nome Sobrenome</h2>
              <p contenteditable="true" className='input-info'>Endereço</p>
              <p contenteditable="true" className='input-info'>E-mail</p>
              <p contenteditable="true" className='input-info'>Contato</p>
              <h2 className='subtitle-eprofile'>Quem somos?</h2>
              <p contenteditable="true" className='input-info -who'>Descrição Livre</p>
          </section>

          <section className='wrapper-eprofile'>
            <div>
              <div>
                <div className='div-title'>
                  <h1  className='subtitle'>Vagas Abertas</h1>
                  <div className='div-buttons'>
                    <button className='add-button' onClick={() => addJob()}><img src={mais} alt="mais" className='image-mais'></img></button>
                    <button className='exclude-button' onClick={() => {
                        var temp = [...jobs]
                        temp.splice(temp.length-1, temp.length);
                        setJobs(temp);
                    }}><img src={mais} alt="menos" className='image-menos'></img></button>
                  </div>
                </div>
                <div className='eprofile-box'>
                  <div className='cargo-area'>
                    <input className='input-eprofile' value={newJob.Cargo} placeholder='Cargo' type='text' onChange={e => setNewJob({...newJob, Cargo: e.target.value})}></input>
                    <input className='input-eprofile' value={newJob.Area} placeholder='Área' type='text' onChange={e => setNewJob({...newJob, Area: e.target.value})}></input>
                  </div>
                  <div className='skills-area'>
                    <input className='input-eprofile -skills' value={newJob.SoftSkill1} placeholder='Soft Skill 01' type='text' onChange={e => setNewJob({...newJob, SoftSkill1: e.target.value})}></input>
                    <input className='input-eprofile -skills' value={newJob.SoftSkill2} placeholder='Soft Skill 02' type='text' onChange={e => setNewJob({...newJob, SoftSkill2: e.target.value})}></input>
                    <input className='input-eprofile -skills' value={newJob.SoftSkill3} placeholder='Soft Skill 03' type='text' onChange={e => setNewJob({...newJob, SoftSkill3: e.target.value})}></input>
                  </div>
                  <div className='cidade-area'>
                    <div className='div-temp'>
                        <input className='input-eprofile -temp' value={newJob.Experiencia} placeholder='Tempo Experiência' type='text' onChange={e => setNewJob({...newJob, Experiencia: e.target.value})}></input>
                        <p className='temp-text'>Meses</p>
                    </div>
                    <input className='input-eprofile -idioma' value={newJob.Idioma} placeholder='Idioma' type='text' onChange={e => setNewJob({...newJob, Idioma: e.target.value})}></input>
                    <select className='select-eprofile' value={newJob.NivelIdioma} onChange={e => setNewJob({...newJob, NivelIdioma: e.target.value})}>
                      <option value=""></option>
                      <option value="Basico">Básico</option>
                      <option value="Intermediario">Intermediário</option>
                      <option value="Avancado">avançado</option>
                    </select>

                    <input className='input-eprofile -idioma' value={newJob.Cidade} placeholder='Cidade' type='text' onChange={e => setNewJob({...newJob, Cidade: e.target.value})}></input>
                  </div>

                  <div className='skills-row'> 
                    <div className='div-skills'>
                      <input className='input-eprofile -hardskills' value={newJob.HardSkill1} placeholder='Hard Skill 01' type='text' onChange={e => setNewJob({...newJob, HardSkill1: e.target.value})}></input>
                      <select className='select-eprofile -hardskills' value={newJob.NivelHS1} onChange={e => setNewJob({...newJob, NivelHS1: e.target.value})}>
                        <option value=""></option>
                        <option value="Basico">Básico</option>
                        <option value="Intermediario">Intermediário</option>
                        <option value="Avancado">avançado</option>
                      </select>
                    </div>
                    <div className='div-skills'>
                      <input className='input-eprofile -hardskills' value={newJob.HardSkill2} placeholder='Hard Skill 02' type='text' onChange={e => setNewJob({...newJob, HardSkill2: e.target.value})}></input>
                      <select className='select-eprofile -hardskills' value={newJob.NivelHS2} onChange={e => setNewJob({...newJob, NivelHS2: e.target.value})}>
                        <option value=""></option>
                        <option value="Basico">Básico</option>
                        <option value="Intermediario">Intermediário</option>
                        <option value="Avancado">avançado</option>
                      </select>
                    </div>
                    <div className='div-skills'>
                      <input className='input-eprofile -hardskills' value={newJob.HardSkill3} placeholder='Hard Skill 03' type='text' onChange={e => setNewJob({...newJob, HardSkill3: e.target.value})}></input>
                      <select className='select-eprofile -hardskills' value={newJob.NivelHS3} onChange={e => setNewJob({...newJob, NivelHS3: e.target.value})}>
                        <option value=""></option>
                        <option value="Basico">Básico</option>
                        <option value="Intermediario">Intermediário</option>
                        <option value="Avancado">avançado</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                  {jobs.map((item, index) =>
                    <div className='eprofile-box -itens' key={index}>
                      <div className='cargo-area'>
                        <p className='input-eprofile' placeholder='Cargo' type='text'>{item.Cargo}</p>
                        <p className='input-eprofile' placeholder='Área' type='text'>{item.Area} </p>
                      </div>
                      <div className='skills-area'>
                        <p className='input-eprofile -skills' placeholder='Soft Skill 01' type='text' >{item.SoftSkill1}</p>
                        <p className='input-eprofile -skills' placeholder='Soft Skill 02' type='text' >{item.SoftSkill2}</p>
                        <p className='input-eprofile -skills' placeholder='Soft Skill 03' type='text' >{item.SoftSkill3}</p>
                      </div>
                      <div className='cidade-area'>
                        <div className='div-temp'>
                            <p className='input-eprofile -temp' placeholder='Tempo Experiência' type='text'></p>
                            <p className='temp-text'>Meses</p>
                        </div>
                        <p className='input-eprofile -idioma' placeholder='Idioma' type='text'>{item.Idioma}</p>
                        <p className='select-eprofile'>{item.NivelIdioma}</p>

                        <p className='input-eprofile -idioma' placeholder='Cidade' type='text'>{item.Cidade}</p>
                      </div>

                      <div className='skills-row'> 
                        <div className='div-skills'>
                          <p className='input-eprofile -hardskills' placeholder='Hard Skill 01' type='text'>{item.HardSkill1}</p>
                          <p className='select-eprofile -hardskills'>{item.NivelHS1}</p>
                        </div>
                        <div className='div-skills'>
                          <p className='input-eprofile -hardskills' placeholder='Hard Skill 02' type='text'>{item.HardSkill2}</p>
                          <p className='select-eprofile -hardskills'>{item.NivelHS2}</p>
                        </div>
                        <div className='div-skills'>
                          <p className='input-eprofile -hardskills' placeholder='Hard Skill 03' type='text'>{item.HardSkill3}</p>
                          <p className='select-eprofile -hardskills'>{item.NivelHS3}</p>
                        </div>
                      </div>
                    </div>)}
              </div>
            </div>
            <button className='enter-button' >Salvar</button>
          </section>
        </main>
      </div>
    </>
  );
}

export default EnterpriseProfile;
