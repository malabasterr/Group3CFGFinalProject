import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import Login from './login/Login'
import ProcessBoxesComponent from './displayboxes/displayBoxes';
import './Homepage.css';
import PurpleDragonImage from './images/Dragon_Purple.png';
import OrangeDragonImage from './images/Dragon_Orange.png';
import FlipCard from './FlipCard/FlipCard';


function Homepage() {

  return (
    <div> 
      <div className='background1'>

        <div><h1>It's Not you, It's Me!</h1></div>
        
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
                <img src={PurpleDragonImage} alt="Dragon" className='dragonPic'/>
            </div>      
                
            <div className="col-md-4"> 
                {<Login></Login>} 
            </div>
                      
            <div className="col-md-3">
              <img src={OrangeDragonImage} alt="Dragon" className='dragonPic'/>
            </div>  
           
          </div>
        </div>
      </div>
    

            <div className='introBox'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-12'>
                    <h2 className='subTitle'>About Us</h2>
                    <p className='paragraph'>Welcome to "It's not you, It's me!" We're a team of five passionate women from the Code First Girls degree program. Join us in transforming digital game nights and making lasting connections. Prepare to laugh, remember, and demonstrate your understanding of your dear ones – all with a simple click. In a world where staying linked matters greatly, our game brings people closer.</p>

                    <FlipCard />
                    </div>
                    </div>
              </div>
            </div>
                   

                
        <div className='howToPlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-12'>
                <h2 className='subTitle'>How To Play!</h2>
                  <div className='box'>
                 
                  <p className='paragraph'>"It's Not You, It's Me" is a captivating online multiplayer game that links two players for interactive fun. The game asks about the players themselves, like "Who's likelier to be late for work?" or "Who's likelier to skip greens?" Each chooses an answer, earning a point for matching responses. After 10 questions, the final score appears. Our game connects friends and lets them play, testing your knowledge of loved ones for entertainment.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='boxbottom'>
              <ProcessBoxesComponent></ProcessBoxesComponent>
            </div>
            <div className='loginButtonAlign'>
              <Nav.Link href="/SigninLoginPage.js" className='.navButton'><button className="loginButton">LOGIN</button></Nav.Link>
            </div>
        </div>
    </div>
  );
}

export default Homepage;

