import { useState, useEffect } from 'react';
import './enterprise-profile.css';
import mais from '../assets/mais.png';
import { Link } from 'react-router-dom';


function EnterpriseProfile() {
  const id = sessionStorage.getItem('meuid')
  const base_url = 'https://jober.azurewebsites.net'

  const [nome, setNome] = useState('Nome e Sobrenome')
  const [endereco, setEndereco] = useState('Endereço')
  const [contato, setContato] = useState('Contato')
  const [email, setEmail] = useState('Email')
  const [descricao, setDescricao] = useState('Descrição Livre')

  const [jobs, setJobs] = useState([])
  const [newJob, setNewJob] = useState({Cargo: "", Area: "", SoftSkill1: "",
                                        SoftSkill2: "", SoftSkill3: "", Experiencia: "",
                                        Idioma: "", NivelIdioma: "", Cidade: "",
                                        HardSkill1: "", NivelHS1: "", HardSkill2: "", NivelHS2: "",
                                        HardSkill3: "", NivelHS3: "", Id: ""})


  function addJob() {
    if (newJob.Cargo !== "" && newJob.Area !== "" && newJob.SoftSkill1 !== "" && newJob.SoftSkill2 !== "" && newJob.SoftSkill3 !== "" &&
        newJob.Experiencia !== "" && newJob.Idioma !== "" && newJob.NivelIdioma !== "" && newJob.Cidade !== "" && newJob.HardSkill1 !== "" &&
        newJob.NivelHS1 !== "" && newJob.HardSkill2 !== "" && newJob.NivelHS2 !== "" && newJob.HardSkill3 !== "" && newJob.NivelHS3 !== "") {
      setJobs([...jobs, newJob])
      setNewJob({Cargo: "", Area: "", SoftSkill1: "",
               SoftSkill2: "", SoftSkill3: "", Experiencia: "",
               Idioma: "", NivelIdioma: "", Cidade: "",
               HardSkill1: "", NivelHS1: "", HardSkill2: "", NivelHS2: "",
               HardSkill3: "", NivelHS3: "", Id: ""})
      
      fetch(`${base_url}/vacancy`, {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({companyName: nome, idCompany: id, cargo: newJob.Cargo, area: newJob.Area, softSkill1: newJob.SoftSkill1,
                              softSkill2: newJob.SoftSkill2, softSkill3: newJob.SoftSkill3,
                              tempoExperiencia: newJob.Experiencia, idioma: newJob.Idioma, idiomaNivel: newJob.NivelIdioma,
                              cidade: newJob.Cidade, hardSkill1Desc: newJob.HardSkill1, hardSkill1Nivel: newJob.NivelHS1,
                              hardSkill2Desc: newJob.HardSkill2, hardSkill2Nivel: newJob.NivelHS2,
                              hardSkill3Desc: newJob.HardSkill3, hardSkill3Nivel: newJob.NivelHS3})
      })
      .then((res) => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
      }
  }


  useEffect(() => {
    //get company profile info
    fetch(`${base_url}/company/${id}`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => {
      if (res.ok) {
        return res.json()
      } 
      throw res;
    }).then((data)=> {
      if (data !== null){
        if (data.NOME !== null) setNome(data.NOME)
        if (data.ENDERECO !== null) setEndereco(data.ENDERECO)
        if (data.EMAIL !== null) setEmail(data.EMAIL)
        if (data.TELEFONE !== null) setContato(data.TELEFONE)
        if (data.descricao !== null) setDescricao(data.DESCRICAO)
      }
    }).catch(err => {
      console.log(err)
    })

    //get vacancies from company
    fetch(`${base_url}/vacancy/${id}`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((data)=> {
      let i = 0
      let jobsData = []
      for(i=0; i<data.length; i++){
        jobsData.push({Cargo: data[i].CARGO, Area: data[i].AREA, 
          SoftSkill1: data[i].SS_1, SoftSkill2: data[i].SS_2, SoftSkill3: data[i].SS_3,
          Experiencia: data[i].EXPERIENCIA, Cidade: data[i].CIDADE,
          Idioma: data[i].IDIOMA, NivelIdioma: data[i].IDIOMA_NIVEL,
          HardSkill1: data[i].HS_1, NivelHS1: data[i].HS_1_NIVEL,
          HardSkill2: data[i].HS_2, NivelHS2: data[i].HS_2_NIVEL,
          HardSkill3: data[i].HS_3, NivelHS3: data[i].HS_3_NIVEL, id: data[i].VACANCY_ID
        })
      }
      console.log(jobsData)
      setJobs(jobsData)
    })
    .catch(err => console.log(err));

  }, [id])

  function handleSaveProfile(e) {
    e.preventDefault();

    setEndereco(document.getElementById('endereco').innerText)
    setContato(document.getElementById('contato').innerText)
    setDescricao(document.getElementById('descricao').innerText)

    const profile = {
        "endereco": endereco,
        "contato": contato,
        "descricao": descricao
    }

    fetch(`${base_url}/company/profile/${id}`, {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(profile)
    })
    .then((res) => res.json())
    .then(data => { 
      console.log(data)
    })
    .catch(err => console.log(err));
  }

  function handleVacancyExclusion(e) {
    e.preventDefault();

    const idVacancy = jobs.at(jobs.length-1).id;
    
    var temp = [...jobs]
    temp.splice(temp.length-1, temp.length);
    setJobs(temp);

    fetch(`${base_url}/vacancy/${idVacancy}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  return (
    <>
      <div className="eprofile-screen">
        <header className='header-eprofile'>
            <div className='logo -eprofile'>
              <h1 className='logo-text -eprofile'>J</h1>
              <h1 className='logo-text -eprofile'>o</h1>
              <h1 className='logo-text -eprofile'>b</h1>
              <h1 className='logo-text -eprofile'>e</h1>
              <h1 className='logo-text -eprofile'>r</h1>
          </div>
          <div className='header-links-eprofile'>
            <Link to='Cadidates' className='candidates-link'>Candidatos</Link>
            <Link to='/jober/' className='candidates-link'>Logout</Link>
          </div>
        </header>

        <main className='info-eprofile'>
          <section className='secao-eprofile'>
              <div className='img-eprofile'><p className='img-text-eprofile'>NS</p></div>
              <h2 className='subtitle-eprofile'>{nome}</h2>
              <p contenteditable="true" id="endereco" className='input-info'>{endereco}</p>
              <p contenteditable="false" id="email" className='input-info'>{email}</p>
              <p contenteditable="true" id="contato" className='input-info'>{contato}</p>
              <h2 className='subtitle-eprofile'>Quem somos?</h2>
              <p contenteditable="true" id="descricao" className='input-info -who'>{descricao}</p>
              <button className='save-button-eprofile' onClick={handleSaveProfile} type="submit">Salvar</button>
          </section>

          <section className='wrapper-eprofile'>
            <div>
              <div>
                <div className='div-title'>
                  <h1  className='div-title-eprofile'>Vagas Abertas</h1>
                  <div className='div-buttons-eprofile'>
                    <button className='add-button' onClick={() => addJob()}><img src={mais} alt="mais" className='image-mais'></img></button>
                    <button className='exclude-button' onClick={handleVacancyExclusion} ><img src={mais} alt="menos" className='image-menos'></img></button>
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
            <button className='enter-button-eprofile' onClick={addJob}>Salvar</button>
          </section>
        </main>
      </div>
    </>
  );
}

export default EnterpriseProfile;
