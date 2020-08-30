import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appointment from './Components/Appointment/Appointment';
import Make_Appointment from './Components/Appointment/Make_Appointment';
import Doctor_Appointment from './Components/Doctor/Doctor_Appointment';
import Doctor_Drawer from './Components/Doctor/Doctor_Drawer';
import Doctor_Dashboard from './Components/Doctor/Doctor_Dashboard';
import Signin from './Components/Auth/Signin';
import Signup from './Components/Auth/Signup';
import Doctor_Patient from './Components/Doctor/Doctor_Patient';
import Doctor_Prescription from './Components/Doctor/Doctor_Prescription';

function App() {
  return (
    <div>
      <Header></Header>

      <Router>
        <Switch>

          <Route path='/appointment'>
            <Appointment></Appointment>
          </Route>

          {/* <Route path='/make_appointment'>
            <Make_Appointment></Make_Appointment>
          </Route> */}

          <Route path='/doctor/appointments'>
            <Doctor_Appointment></Doctor_Appointment>
          </Route>

          <Route path='/doctor/dashboard'>
            <Doctor_Dashboard></Doctor_Dashboard>
          </Route>

          <Route path='/doctor/patients'>
            <Doctor_Patient></Doctor_Patient>
          </Route>

          <Route path='/doctor/prescriptions'>
            <Doctor_Prescription></Doctor_Prescription>
          </Route>

          {/* <Route path='/doctor/signin'>
            <Signin></Signin>
          </Route>

          <Route path='/doctor/signup'>
            <Signup></Signup>
          </Route> */}


          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path="*">
            <h1>Page Not Found</h1>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
