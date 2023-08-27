import React from 'react';
import { Nav } from 'react-bootstrap';
import Login from '../login/Login'
import ProcessBoxesComponent from '../displayboxes/displayBoxes';
import './Homepage.css';
import PurpleDragonImage from '../images/Dragon_Purple.png';
import OrangeDragonImage from '../images/Dragon_Orange.png';
import FlipCard from '../FlipCard/FlipCard';


function Homepage() {

  return (
    <div> 
      <div className='background1'>

        <div><h1>It's Not You, It's Me!</h1></div>
        
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
                    <div className='paragraph'>
                      <p>Welcome to "It's Not You, It's Me!". Created by a team of 
                        five passionate women from the Code First Girls degree program, 
                        INYIM redefines digital game nights by replacing the frustration 
                        of overly competitive chance-based games. It instead introduces a 
                        humorous and collaborative game that fosters relationship-building 
                        discussions, showcasing your understanding of your loved ones.</p>
                      <br />
                      <p>Discover the beauty of digital games— a medium that effortlessly 
                        bridges any distance. Play with your roommate or connect with your 
                        cousin on the other side of the world! In a world where human connection 
                        is hugely important, we hope INYIM helps to bring you closer to those you love.</p>
                    </div>
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
                  <div className='paragraph'>
                    <p>"It's Not You, It's Me" is an online multiplayer game that links 
                      two players for interactive fun. The game asks the players questions 
                      about themselves- the players must then pick who between them they believe 
                      to be the answer to the question. For example you may have to decide- "Who 
                      is the better driver?" or "Who is more likely to be late for work?". Each 
                      player selects their answer, and a point is earnt every time the players 
                      have matching responses. After 10 questions, the final score will appear!</p>
                    <br />
                    <p>Think you know your family? Are you and your bestie on the same wavelength 
                      and can reach 10/10? Time to find out... </p>
                  </div>
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

