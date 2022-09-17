import React, { useContext } from 'react';
// import Header from '../sections/Header';
import { Redirect, Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../hooks/UserContext';

export default function Landing() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
        if(user) {
            // <Redirect to='/home'/> 
            navigate('/home');
        }

    return(
        <div className="page">
           <h3>This is the public landing page</h3> 
        </div>
    )
}