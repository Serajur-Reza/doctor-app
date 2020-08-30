import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { MenuItem } from '@material-ui/core';
import { useState } from 'react';

const Make_Appointment = (props) => {

  const [time, setTime]= useState('')
  const [name, setName]= useState('')
  const [phone, setPhone]= useState('')
  const [email, setEmail]= useState('')
  const [date, setDate]= useState(new Date(props.currentDate.getTime()).toDateString())
  
  const bookData={
    "time": time,
    "name": name,
    "phone": phone,
    "email": email,
    "date": date
  }


  const [selectedDate, setSelectedDate] = React.useState(new Date());
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleClickListItem = () => {
  //   setOpen(true);
  // };

  const handleTime=(event)=>{
    bookData[event.target.name]=event.target.value
    setTime(bookData[event.target.name])
    // console.log(bookData)
  }

  const handleName=(event)=>{
    bookData[event.target.name]=event.target.value
    setName(bookData[event.target.name])
    // console.log(bookData)
  }

  const handlePhone=(event)=>{
    bookData[event.target.name]=event.target.value
    setPhone(bookData[event.target.name])
    // console.log(bookData)
  }

  const handleEmail=(event)=>{
    bookData[event.target.name]=event.target.value
    setEmail(bookData[event.target.name])
    // console.log(bookData)
  }

  const handleDate=(event)=>{
    bookData[event.target.name]=event.target.value
    setDate(bookData[event.target.name])
    // console.log(bookData)
  }
  
  const handleBook=()=>{
    
    fetch("http://127.0.0.1:4200/addappointment", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookData) // body data type must match "Content-Type" header
    }).then(res=> res.json())
    .then(data=>{
      console.log(data);
    })
    setOpen(false);
  }

  

  return (
    
    <div className='container'>

        

      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Book Appointment
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          
          <TextField name="time" fullWidth select  label="Time and Stuff" onChange={handleTime} required>
            <MenuItem value={"8.00am to 9.30 am (Teeth Orthodentics)"}>8.00am to 9.30 am (Teeth Orthodentics)</MenuItem>
            <MenuItem value={"9.30am to 11.00 am (Cosmetic Dentistry)"}>9.30am to 11.00 am (Cosmetic Dentistry)</MenuItem>
            <MenuItem value={"11.00am to 12.30 pm (Teeth Cleaning)"}>11.00am to 12.30 pm (Teeth Cleaning)</MenuItem>
            <MenuItem value={"12.30pm to 2.00 pm (Cavity Protection)"}>12.30pm to 2.00 pm (Cavity Protection)</MenuItem>
            <MenuItem value={"2.00pm to 3.30 pm (Teeth Orthodentics)"}>2.00pm to 3.30 pm (Teeth Orthodentics)</MenuItem>
            <MenuItem value={"3.30pm to 5.00 pm (Teeth Orthodentics)"}>3.30pm to 5.00 pm (Teeth Orthodentics)</MenuItem>
        </TextField>

          <TextField
            margin="dense"
            label="Name"
            name="name"
            type="text"
            onChange={handleName}
            fullWidth
            required
          />

          <TextField
            margin="dense"
            label="Phone Number"
            name='phone'
            type="Phone Number"
            onChange={handlePhone}
            fullWidth
            required
          />

          <TextField
            margin="dense"
            label="Email Address"
            name='email'
            type="email"
            onChange={handleEmail}
            fullWidth
            required
          />

          <TextField
            margin="dense"
            label="Date"
            name='date'
            value={date}
            onChange={handleDate}
            fullWidth
            disabled
            required
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Cancel
          </Button>
          <Button onClick={handleBook} variant="contained" color="primary">
            Book
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
};

export default Make_Appointment;