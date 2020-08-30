import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Doctor_Dashboard from '../Doctor/Doctor_Dashboard';
import Signup from "./Signup";

const Application = () => {
    const user= null;
    return (
        user? <Doctor_Dashboard/>:
        <SignIn/>
    );
};

export default Application;