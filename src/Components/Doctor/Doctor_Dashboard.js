import React from 'react';
import Doctor_Drawer from './Doctor_Drawer';

const Doctor_Dashboard = () => {

    const [appointments, setAppointments]=React.useState([])

    React.useEffect(()=>{
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
            <Doctor_Drawer head="Dashboard">
            {
                appointments.map(app=> <div><span className="sl">  {++count}  </span> 
                <span className="sl">  {app.name}  </span>
                <span className="sl">  {app.phone}  </span>
                <span className="sl">  {app.email}  </span>
                </div>)
            }
            </Doctor_Drawer>
        </div>
    );
};

export default Doctor_Dashboard;