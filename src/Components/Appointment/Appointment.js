// import Calendar from 'react-calendar';
// import { useState } from 'react';
// import 'react-calendar/dist/Calendar.css';

import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import Make_Appointment from './Make_Appointment';

const Appointment=()=> {
    const [selectedDate, setSelectedDate] = React.useState(new Date(new Date().getTime()+60 * 60 * 24 * 1000));
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    // const [date, setDate]= useState(new Date());

    // const onChange=(date)=>{
    //   setDate(date)
    // }
    
    
    return (
        <div className="container">

          {/* <Calendar onChange={onChange} value={date}/>

          <p>
          {
            date.toDateString()
          }
          </p> */}
        
        
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container spacing={1}>
        <Grid container item xs={6} spacing={3}>
          
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="dd/MM/yyyy"
            minDate={selectedDate}
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          
          <h5>Set your appointment for {selectedDate.toDateString()}, or later</h5>
          {/* {
            selectedDate.toDateString()
          } */}
        </Grid>

        <Grid container item xs={6} spacing={3}>
        <Make_Appointment currentDate={selectedDate}></Make_Appointment>


        </Grid>
        </Grid>
      </MuiPickersUtilsProvider>

      
        </div>
    );
  }

export default Appointment;