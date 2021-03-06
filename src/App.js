/**
 * Componente: Bloco isolado de html, css e JS, o qual não interfere no restante da aplicação.
 * Propriedade:Informações que um componente PAI passa para o componente FILHO
 * Estado: Informações mantidas pelo componente (Lembrar: Imutabilidade);
 */

import React, { useEffect, useState } from 'react';
import api from './services/api';

import './Global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'


function App() {

  const [ latitude, setLatitude] = useState('');
  const [ longitude, setLongitude] = useState('');
  const [ github_username, setGithub_username] = useState('');
  const [ techs, setTechs] = useState('');
  
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) =>{
        console.log(position);
        
        const { latitude, longitude } = position.coords
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleAddDev(e){
    console.log('value: ',e)
    e.preventDefault();

    // const response = await api.get('/devs')

    const response  = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    })

    setGithub_username('');
    setTechs('');
    
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>

          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required value={github_username} onChange={e => setGithub_username(e.target.value)}></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required value={techs} onChange={e => setTechs(e.target.value)}></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)}></input>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" required value={longitude} onChange={ e => setLongitude(e.target.value)}></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>


      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/6932461?s=460&v=4" alt="Luis Felipe Silva" />
              <div className="user-info">
                <strong>Luis Felipe</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Let's create a good future</p>
            <a href="https://github.com/luisfs">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/6932461?s=460&v=4" alt="Luis Felipe Silva" />
              <div className="user-info">
                <strong>Luis Felipe</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Let's create a good future</p>
            <a href="https://github.com/luisfs">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/6932461?s=460&v=4" alt="Luis Felipe Silva" />
              <div className="user-info">
                <strong>Luis Felipe</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Let's create a good future</p>
            <a href="https://github.com/luisfs">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/6932461?s=460&v=4" alt="Luis Felipe Silva" />
              <div className="user-info">
                <strong>Luis Felipe</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Let's create a good future</p>
            <a href="https://github.com/luisfs">Acessar perfil no Github</a>
          </li>
        </ul>

      </main>
    </div>
  );
}

export default App;
