import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div class='container'>
            <h1>Your new smile starts here</h1>
            <p>We are here to provide you the best health care</p>
            <Link to="/appointment">
                <Button variant="contained" color="primary">
                    Get Appointment
                </Button>
            </Link>
        </div>
    );
};

export default Home;