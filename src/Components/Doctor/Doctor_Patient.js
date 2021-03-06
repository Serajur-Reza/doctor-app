import React, { useState } from 'react';
import Doctor_Drawer from './Doctor_Drawer';
import { useEffect } from 'react';
import './Doctor_Styles.css'

const Doctor_Patient = () => {

    const [appointments, setAppointments]=useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:4200')
        .then(res=> res.json())
        .then(data=>{
            console.log('data from database', data)
            setAppointments(data)
        })
    },[])
    
    
    let count = 0;
    return (
        <div>
            <Doctor_Drawer head="Patients">
            <h1>All Patients</h1>
            {
                appointments.map(app=> <div><span className="sl">  {++count}  </span> 
                <span className="sl">  {app.name}  </span>
                <span className="sl">  {app.phone}  </span>
                </div>)
            }
            </Doctor_Drawer>
        </div>
    );
};

export default Doctor_Patient;