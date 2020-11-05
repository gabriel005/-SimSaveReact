import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './login'
import Home from './home'
import './App.css'


export default class App extends React.Component {


  render() {

    return (

      <div className="conteiner">

     
      <Router>
      <div>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>


          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/">
            <Home></Home>
          </Route>
          

        </Switch>
      </div>
    </Router>

     
      </div>

    );
  }

}



