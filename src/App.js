
import './App.css';
import React , {useState,useEffect} from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginUser from './components/loginUser';
import SingUpUser from "./components/singupUser";
import DashBord from "./components/dashBoard";
import {BrowserRouter as Router,Switch,Route} from  'react-router-dom';
import Navbar from './components/Navbar';



/* */

function App() {
  return (
    <div className="App "> 
    <Router>
          <div className="App ">

            <Switch>
               <Route path = "/" exact component = {LoginUser} />
               <Route path = "/SingUpUser"  component = {SingUpUser} />
               <Route path = "/dashBoard"  component = {DashBord} />
             </Switch> 
          </div>
   </Router>
    </div>

  
  );
}

export default App;
