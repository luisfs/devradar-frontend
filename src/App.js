/**
 * Componente: Bloco isolado de html, css e JS, o qual não interfere no restante da aplicação.
 * Propriedade:Informações que um componente PAI passa para o componente FILHO
 * Estado: Informações mantidas pelo componente (Lembrar: Imutabilidade);
 */

import React, { useState } from 'react';

import './Global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
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
