import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase_Config';

firebase.initializeApp(firebaseConfig);

function App() {

  const [user, setUser]= useState({
    isSignedIn: false,
    name: '',
    email: '',
    photoURL: ''
  });

  const provider = new firebase.auth.GoogleAuthProvider();

  const handleSignIn=()=>{
    firebase.auth().signInWithPopup(provider)
    .then(res=> {
      const {displayName, photoURL, email} = res.user;
      const signedInUser={
        isSignedIn: true,
        name: displayName,
        email: email,
        photoURL: photoURL
      }
      setUser(signedInUser);
      console.log(displayName, photoURL, email);
    }).catch(err=>{
      console.log(err);
      console.log(err.message);
    })
  }

  const handleSignOut=()=>{
    firebase.auth().signOut()
    .then(res=> {
      const signedOutUser={
        isSignedIn: false,
        name: '',
        email: '',
        photoURL: '',
        password: '',
        error: '',
        isValid: false,
        existingUser: false
      }
      setUser(signedOutUser);
    })
    .catch(err=>{

    });
  }

  const is_valid_email = email=> /(.+)@(.+){2,}\.(.+){2,}/.test(email);
  const hasNumber= (input)=>{ return /\d/.test(input); }

  const switchForm=(event)=>{
    const createdUser={...user}
    createdUser.existingUser=event.target.checked
    setUser(createdUser)
    //console.log(event.target.checked)
  }

  const handleChange=(event)=>{
    const newUserInfo={
      ...user
    }
    
    //perform validation
    let isValid= true;
    if(event.target.name === 'email'){
      isValid=is_valid_email(event.target.value);
    }

    if(event.target.name === 'password'){
      isValid= event.target.value.length >8 && hasNumber(event.target.value);
    }
    console.log(event.target.name);
    
    newUserInfo[event.target.name]= event.target.value;
    newUserInfo.isValid= isValid;
    setUser(newUserInfo)
  }
  const createAccount=(event)=>{
    
    if(user.isValid){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res=>{
        console.log(res)
        const createdUser={...user}
        createdUser.isSignedIn=true
        createdUser.err= ''
        setUser(createdUser)
      })
      .catch(err=> {
        console.log(err.message)
        const createdUser={...user}
        createdUser.isSignedIn= false
        createdUser.error= err.message
        setUser(createdUser)
      });
    }
    event.preventDefault();
    event.target.reset();
  }

  const signInUser=(event)=>{

    if(user.isValid){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res=>{
        console.log(res)
        const createdUser={...user}
        createdUser.isSignedIn=true
        createdUser.err= ''
        setUser(createdUser)
      })
      .catch(err=> {
        console.log(err.message)
        const createdUser={...user}
        createdUser.isSignedIn= false
        createdUser.error= err.message
        setUser(createdUser)
      });
    }
    event.preventDefault();
    event.target.reset();
  }
  
  return (
    <div className="App">
      {
        user.isSignedIn? <button onClick={handleSignOut}>Sign Out</button>:
        <button onClick={handleSignIn}>Sign In</button>
      }
      
      {
        user.isSignedIn && <div>
          <p> Welcome, {user.name}</p>
          <p> Email, {user.email}</p>
          <img src={user.photoURL} alt=""/>
        </div>
        
      }

      <h1>Our Own Authentication</h1>

      <input type="checkbox" name="switchForm" onChange={switchForm} id="switchForm"/>
      <label htmlFor="switchForm">Returning User</label>
      <form style={{ display: user.existingUser?"block":"none" }} onSubmit={signInUser}>
        <br/>
        <input type="text" onBlur={handleChange} name="email" placeholder="email" required/>
        <br/>
        <input type="password" onBlur={handleChange} name="password" placeholder="password" required/>
        <br/>
        <input type="submit" value="Sign In"/>
      </form>

      <form style={{ display: user.existingUser?"none":"block" }} onSubmit={createAccount}>
        <input type="text" onBlur={handleChange} name="name" placeholder="name" required/>
        <br/>
        <input type="text" onBlur={handleChange} name="email" placeholder="email" required/>
        <br/>
        <input type="password" onBlur={handleChange} name="password" placeholder="password" required/>
        <br/>
        <input type="submit" value="Sign Up"/>
      </form>
      
      {
        user.error && <p style={{color: 'red'}}>{user.error}</p>
      }
    </div>
  );
}

export default App;
