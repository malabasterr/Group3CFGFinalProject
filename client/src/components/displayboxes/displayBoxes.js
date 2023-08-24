import React from 'react';
import './displayBoxes.css';
import greenDragon from '../images/BabyGreenDragon.jpg';



function ProcessBoxesComponent() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className='howto'>
            <img src={greenDragon} alt="Login" className='dragonPic'/>
              <h6 className='boxText'>1. Login</h6>
              <p className='boxText'>Login to your personal account.</p>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className='howto'>
            <img src={greenDragon} alt="greenDragon" className='dragonPic'/>
              <h6 className='boxText'>2. Find a friend</h6>
              <p className='boxText'>Link accounts to play against your friends.</p>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className='howto'>
            <img src={greenDragon} alt="Logodrag" className='dragonPic'/>
              <h6 className='boxText'>3. Quiz</h6>
              <p className='boxText'>Play and find out how well you know eachother.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProcessBoxesComponent;
 