import React from 'react'
import StartGameButton from './StartGameButton'
import UsernameDisplay from '../login/UsernameDisplay';
import QuizSlider from './quizSlider/QuizSlider';

function GameHome() {

  return (
    <div className='roomHomeBackground'>
      <div className='usernameDisplay'>
        <UsernameDisplay />
        <div>
          <QuizSlider />
          <StartGameButton name="Play with friend" type="friend" />
        </div>
      </div>
    </div>
  );
};

export default GameHome