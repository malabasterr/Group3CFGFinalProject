import React from 'react';
import './ProcessBoxesComponent.css';


function ProcessBoxesComponent() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className='howto'>
              
              <h6>1. Login</h6>
              <p>Login to your personal account.</p>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className='howto'>
            
              <h6>2. Find a friend</h6>
              <p>Link accounts to play against your friends.</p>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className='howto'>
              
              <h6>3. Quiz</h6>
              <p>Play and find out how well you know eachother.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProcessBoxesComponent;
 