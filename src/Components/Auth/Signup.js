import React from 'react';
import {FormHelperText, TextField, Button } from '@material-ui/core';
import { useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Signup = () => {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [displayName, setDisplayName] = useState("");
    // const [error, setError] = useState(null);
    // // const createUserWithEmailAndPasswordHandler = (event, email, password) => {
    // //     event.preventDefault();
    // //     setEmail("");
    // //     setPassword("");
    // //     setDisplayName("");
    // // };
    // const onChangeHandler = event => {
    //     const { name, value } = event.currentTarget;
    //     if (name === "userEmail") {
    //     setEmail(value);
    //     } else if (name === "userPassword") {
    //     setPassword(value);
    //     } else if (name === "displayName") {
    //     setDisplayName(value);
    //     }
    // };

    const [user, setUser]= useState({
        isSignedIn: false,
        name: '',
        email: '',
        photoURL: ''
      });

    const handleChange=(e)=>{
        const newUserInfo= {
            ...user
        }

        newUserInfo[e.target.name]=e.target.value 
        setUser(newUserInfo)
        console.log(user.name)
    }

    const createAccount=()=>{
        // console.log(user.name, user.email)
    }

    return (
        <div className="container">

        <TextField
            margin="dense"
            label="Name"
            type="text"
            name = "userEmail"
            fullWidth
            onChange={handleChange}
          />

        <TextField
            margin="dense"
            label="Email Address"
            type="email"
            name = "userPassword"
            fullWidth
            onChange={handleChange}
        />
            <br/>
        <TextField
            margin="dense"
            label="Password"
            type="password"
            name = "displayName"
            fullWidth
            onChange={handleChange}
        />
        <br/>
        <Button onClick={createAccount} variant="contained" color="primary" fullWidth>
            Sign Up
        </Button>
        </div>
    );
};

export default Signup;