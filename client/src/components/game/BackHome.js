import React, { useState } from 'react';
import axios from 'axios';
import './game.css';
import { useNavigate } from 'react-router-dom';

function BackHome() {

    const navigate = useNavigate();
    const [questionSet, setQuestionSet] = useState([]);

    const reshuffleQuestions = async () => {
        try {
          const response = await axios.get('http://localhost:1234/api/questions/reshuffle');
          setQuestionSet(response.data.questions);
          console.log('Question set reshuffled:', response.data.questions);
        } catch (error) {
          console.error('Error reshuffling question set:', error);
        }
        navigate('/');
      };

  return (
    <div className='buttonContainer'>
        <button className="secondaryButton" onClick={reshuffleQuestions}>Back to Homepage</button>
    </div>
  )
};

export default BackHome;
