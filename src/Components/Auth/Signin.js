import React from 'react';
import {FormHelperText, TextField, Button } from '@material-ui/core';
import { useState } from 'react';


const Signin = () => {
    // const [email, setEmail]= useState('')
    // const [password, setPassword]= useState('')
    // const [error, setError]= useState(null)

    // const onChangeHandler = (event) => {
    //     const {name, value} = event.currentTarget;
    //     if(name === 'userEmail') {
    //         setEmail(value);
    //     }
    //     else if(name === 'userPassword'){
    //       setPassword(value);
    //     }
    // }

    return (
        <div className='container'>
        <TextField
            margin="dense"
            label="Email Address"
            type="email"
            name = 'userEmail'
            fullWidth
        />
            <br/>
        <TextField
            margin="dense"
            label="Password"
            type="password"
            name= 'userPassword'
            fullWidth
        />
        <br/>
        <Button variant="contained" color="primary" fullWidth>
            Sign In
          </Button>
        </div>
    );
};

export default Signin;