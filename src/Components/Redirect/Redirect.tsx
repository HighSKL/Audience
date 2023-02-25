import { connect } from 'http2';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
    const navigate = useNavigate()
    const login = 'null'; 
    if(login == null){
        navigate('/auth')
    }
    else{
        navigate('/profile')
    }
    return (
        <div>
            
        </div>
    );
};

export default Redirect;