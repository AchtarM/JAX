
import './App.css';
import React , {useState,useEffect} from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginUser from './components/loginUser';
import Navbar from "./components/navbar";
import SingUpUser from "./components/singupUser";
import DashBord from "./components/dashBord";
import {BrowserRouter as Router,Switch,Route} from  'react-router-dom';

function App() {
  return (
    <Router>
          <div className="App ">

            <Switch>
               <Route path = "/" exact component = {LoginUser} />
               <Route path = "/SingUpUser"  component = {SingUpUser} />
               <Route path = "/dashBoard"  component = {DashBord} />
             </Switch> 
          </div>
      </Router>
  );
}

export default App;
