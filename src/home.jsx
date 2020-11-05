import React, { useEffect, useState } from 'react';
import './App.css'


class Home extends React.Component {


  state = {
    loading: true,
    title1: null,
    title2: null,
    title3: null,
    title4: null,

  };



  async componentDidMount() {
    const url = "https://teste-simsave.getsandbox.com/home";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ title1: data.products[0], title2: data.products[1], title3: data.products[2], title4: data.products[3], loading: false });
    console.log(data.products[0]);
  }


  render() {


    return (


      <div className="conteiner">

        <div class="topnav">
          <a href="/login" class="active">Cadastre-se</a>
          <a href="/login">Entrar</a>
          <img src='LogoSimSave.png' alt="Logo" />
        </div>


        <div>
          <img height="100%" width="100%" src="./banner.png"></img>
        </div>


        <div>
          <div class="row">
            <div class="column">
              <div class="card">

                {this.state.loading || !this.state.title1 ? (
                  <div>loading...</div>
                ) : (
                    <div>
                      <h3 className="h3Vermelho">{this.state.title1.title}</h3>
                      <p>{this.state.title1.text}</p>
                    </div>
                  )}

                <div className="cardBottom">
                  <button className="buttonCad">
                    <p className="h3Vermelho">Saiba Mais</p>
                  </button>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card">

                {this.state.loading || !this.state.title2 ? (
                  <div>loading...</div>
                ) : (
                    <div>
                      <h3 className="h3Azul">{this.state.title2.title}</h3>
                      <p>{this.state.title2.text}</p>
                    </div>
                  )}

                <div className="cardBottom">
                  <button className="buttonCad">
                    <p>Em Breve</p>
                  </button>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card">

                {this.state.loading || !this.state.title3 ? (
                  <div>loading...</div>
                ) : (
                    <div>
                      <h3 className="h3Roxo">{this.state.title3.title}</h3>
                      <p>{this.state.title3.text}</p>
                    </div>
                  )}

                <div className="cardBottom">
                  <button className="buttonCad">
                    <p>Em Breve</p>
                  </button>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card">
                
                {this.state.loading || !this.state.title4 ? (
                  <div>loading...</div>
                ) : (
                    <div>
                      <h3 className="h3Verde">{this.state.title4.title}</h3>
                      <p>{this.state.title4.text}</p>
                    </div>
                  )}

                <div className="cardBottom">
                  <button className="buttonCad">
                    <p className="h3Verde">Saiba Mais</p>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div>
          <h1></h1>
        </div>



        <div className='midBlue'>
        </div>



        <div className="assinante">
          <h1 class="display-3">Ainda não é assinante?</h1>
          <p>Cadastre-se gratuitamente e descubra como vários de profissionais da área da saúde estão aprimorando seus estudos através do método inovador SimSave.</p>
          <a href="/login">
            <button className="buttonCad">
              <b><p className="h3Azul">Cadastre-se</p></b>
            </button>
          </a>
        </div>


        <div className='footerPage'>
          <img className="imgLogoFooter" src='imgsBotao.png'></img>
        </div>

      </div>

    );
  }

}


export default Home;
