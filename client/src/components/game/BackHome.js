import React from 'react';
import axios from 'axios';
import './game.css';
import { useNavigate } from 'react-router-dom';

function BackHome() {

    const navigate = useNavigate();

    const reshuffleQuestions = async () => {
        await axios.post('/api/reset-cache');
        navigate('/');
    };

  return (
    <div className='buttonContainer'>
        <button className="secondaryButton" onClick={reshuffleQuestions}>Back to Homepage</button>
    </div>
  )
};

export default BackHome;
