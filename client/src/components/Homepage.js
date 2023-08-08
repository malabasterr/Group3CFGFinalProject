import React from 'react';
import Login from './Login'
import ProcessBoxesComponent from './ProcessBoxesComponent';
import './Homepage.css';

function Homepage() {

  return (
    <div>
      <div>
        
        <h1>It's Not you, It's Me!</h1>
            
            <div className='login'>
              {<Login></Login>}
            </div>
      </div>

      <div className='howToPlay'>
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                  <div class="box">
                    <h2 className='subTitle'>INTRO</h2>
                    <p>All ABOUT US!</p>
                    
                  </div>
                </div>
              </div>
            </div>
      </div>




        <div className='howToPlay'>
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                <h2 className='subTitle'>How To Play</h2>
                  <div class="box">
                  <p>"It's Not You, It's Me" is an engaging online multiplayer game 
                that connects two players for a fun and interactive quiz. The game 
                poses questions about the players themselves, such as “Who is 
                more likely to be late for work?” and "Who is more likely to not eat
                their greens?" 
                <br></br>
                Players must separately choose an answer, either themselves or their 
                partner, and earn a point for each matching response. After answering 
                10 questions, the final score is revealed. Our game allows friends to 
                find each other and play together.
                <br></br>
                "It's Not You, It's Me" offers a unique way to stay connected and entertained by testing how 
                well you know your friends or family.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='boxes'>
              <ProcessBoxesComponent></ProcessBoxesComponent>
            </div>
        </div>

    </div>
  );
}

export default Homepage;

