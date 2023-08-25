import React from 'react'
import Button from './Button'
import UsernameDisplay from '../login/UsernameDisplay';
import QuizSlider from './QuizSlider/QuizSlider';

function RoomHome() {
  return (
    <div className='roomHomeBackground'>
      <div className='usernameDisplay'>
        <UsernameDisplay />
        <div>
          <QuizSlider />
          <Button name="play with friend" type="friend" />
        </div>
      </div>
    </div>
  )
}

export default RoomHome