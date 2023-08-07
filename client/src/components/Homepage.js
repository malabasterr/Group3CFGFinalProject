import React, { useState } from 'react';
import Login from './Login'
import './Homepage.css';
<link href="https://fonts.googleapis.com/css?family=Bungee+Inline" rel="stylesheet"></link>

function Homepage() {

  return (
    <div>
        <h1>It's Not you It's Me!</h1>
        
          <div className="container">
            <div className="row">
              <div className="col col-4">
                {<img src={process.env.PUBLIC_URL + '/Dragons.png'} alt="Dragon IMG" />}
              </div>
            <div className="col col-4">
                {<Login></Login>}
            </div>
            <div className="col col-4">
                {<img src={process.env.PUBLIC_URL + '/Dragons.png'} alt="Dragon IMG" />}
            </div>
        </div>
    </div>
   
        <div>
            <h2>How To Play</h2>
        </div>

    </div>
  );
}

export default Homepage;

