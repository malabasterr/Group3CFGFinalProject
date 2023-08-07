import React, { useState } from 'react';
import Login from './Login'
import './Homepage.css';

function Homepage() {

  return (
    <div>
      <div>
        <h1>It's Not you It's Me!</h1>
            
            <div className='login'>
              {<Login></Login>}
            </div>

      </div>
   
        <div className='howToPlay'>
            <h2>How To Play</h2>
        </div>

    </div>
  );
}

export default Homepage;

