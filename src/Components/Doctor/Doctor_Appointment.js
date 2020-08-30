import React from 'react';
import Appointment from '../Appointment/Appointment';
import Doctor_Drawer from './Doctor_Drawer';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { useEffect } from 'react';

const Doctor_Appointment = () => {

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [appointments, setAppointments]=React.useState([])
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(()=>{
    
    fetch("http://127.0.0.1:4200/getAppointmentsByDate", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({date:selectedDate.toDateString()}) // body data type must match "Content-Type" header
    }).then(res=> res.json())
    .then(data=>{
      if(data.length){
        console.log(data);
        setAppointments(data)
      }
      
    })
    // console.log(JSON.stringify(selectedDate.toDateString()))
  })
    return (
      <div className="container">
        <Doctor_Drawer head="Appointments">

        <MuiPickersUtilsProvider utils={DateFnsUtils}>

          
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="dd/MM/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
              
            }}
          />
          
          {/* {
            selectedDate.toDateString()
          } */}
        
        
          {
                appointments.length && appointments.map(app=> <div><button className="btn btn-dark sl">  Not Visited  </button> 
                <span className="sl">  {app.name}  </span>
                <span className="sl">  {app.phone}  </span>
                </div>)
          }

      </MuiPickersUtilsProvider>

        </Doctor_Drawer>
        
      </div>
    );
};

export default Doctor_Appointment;