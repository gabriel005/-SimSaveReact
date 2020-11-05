import React, { Component } from 'react';
import './App.css';

class Login extends Component {

  render() {

    return (

      <div className="container">
        <div className="cadTop">          
        <a href="/home"><img src='LogoSimSaveBranco.png' alt="Logo" className="imgLogin" href="/login"/></a>
        </div>

        <div className="cadEntrar">
          <h1 class="display-3">Entrar na plataforma</h1>
          <p>Digite seu e-mail e senha abaixo para entrar na plataforma.</p>

          <form>
            <input type="text" id="nome" name="nome" placeholder="Nome"/>
            <input type="text" id="senha" name="senha" placeholder="Senha"/>
            
            <input className="entrarLogin" type="submit" value="Enviar" />
          </form>

        </div>

        <div className="cadBot"></div>
      </div>
    );
  }

}

export default Login;
