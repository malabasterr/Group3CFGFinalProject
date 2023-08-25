import React from 'react';
import './displayBoxes.css';
import greenDragon from '../images/BabyGreenDragon.jpg';



function ProcessBoxesComponent() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className='howto'>
            <img src={greenDragon} alt="Login" className='dragonPic'/>
              <h6 className='boxHeading'>1. Login</h6>
              <p className='boxText'>Login or create an account. Choose a username and password to get started!.</p>
            </div>
          </div>
  
          <div className="col-md-3">
            <div className='howto'>
            <img src={greenDragon} alt="greenDragon" className='dragonPic'/>
              <h6 className='boxHeading'>2. Find a friend</h6>
              <p className='boxText'>Find your friend you want to play with via their username to link up and play.</p>
            </div>
          </div>
  
          <div className="col-md-3">
            <div className='howto'>
            <img src={greenDragon} alt="Logodrag" className='dragonPic'/>
              <h6 className='boxHeading'>3. Quiz</h6>
              <p className='boxText'>Answer a set of 10 Questions. Each matched answer gets you a point!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProcessBoxesComponent;
 