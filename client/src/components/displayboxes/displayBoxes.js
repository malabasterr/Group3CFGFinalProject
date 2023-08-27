import React from 'react';
import './displayBoxes.css';
import DragonPairImage from '../images/Dragon_Pair.png';
import PurpleDragonImage from '../images/Dragon_Purple.png';
import OrangeDragonImage from '../images/Dragon_Orange.png';



function ProcessBoxesComponent() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className='howto'>
              <div className="howToBorder">
                <img src={PurpleDragonImage} alt="Purple Dragon" className='dragonPic'/>
              </div>
              
              <h6 className='boxHeading'>1. Login</h6>
              <p className='boxText'>Login or create an account. Choose a username and password.</p>
            
            </div>
          </div>
  
          <div className="col-md-3">

            <div className='howto'>
            <div className="howToBorder">
              <img src={DragonPairImage} alt="Dragon Friends" className='dragonPic'/>
            </div>
              <h6 className='boxHeading'>2. Link to friend</h6>
              <p className='boxText'>After clicking Start Game, copy the link and send to your friend to get started!</p>
            </div>
          </div>
  
          <div className="col-md-3">
            <div className='howto'>
              <div className="howToBorder">
                <img src={OrangeDragonImage} alt="Orange Dragon" className='dragonPic'/>
              </div>
                <h6 className='boxHeading'>3. Quiz</h6>
                <p className='boxText'>Answer a set of 10 Questions. Each matched answer gets you a point!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProcessBoxesComponent;
 