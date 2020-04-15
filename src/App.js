import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import DoctorPanel from './components/DoctorPanel/DoctorPanel';
import Appointment from './components/Appointment/Appointment'; 


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/doctorPanel">
            <DoctorPanel></DoctorPanel>
          </Route>
          <Route path="/getAppointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/Header">
            <Header></Header>
          </Route>
          <Route exact path="/">
            <Header></Header>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
