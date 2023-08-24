import React from 'react'
import Button from './Button'
import UsernameDisplay from '../login/UsernameDisplay';
function RoomHome() {
  return (
    <div>
    <UsernameDisplay />
    <div>
        {/* <Button name="Play with stranger" type="stranger" /> */}
        <Button name="play with friend" type="friend" />
    </div>
    </div>
  )
}

export default RoomHome