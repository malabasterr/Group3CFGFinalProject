import React from 'react';
import axios from 'axios';
import './game.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions';

function BackHome() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const reshuffleQuestions = async () => {
      await axios.post('/api/reset-cache');
      dispatch(logout());
      navigate('/');
  };

  return (
    <button className="secondaryButton" onClick={reshuffleQuestions}>Back to Homepage</button>
  )
};

export default BackHome;
