import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //Bootstrap import
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Error from './components/Error';
import HeaderComponent from './components/header/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';
import ProcessBoxesComponent from './components/displayboxes/displayBoxes';
import LoginSignup from './components/SigninLoginPage.js';
import Room from './components/game/Room';
import RoomHome from './components/game/RoomHome';



function App() {
  return (
    <main>
      <HeaderComponent />
      
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/SigninLoginPage.js" element={<LoginSignup />} />
        {/* This is not a real path, I am using it to test my features */}
        <Route path="/RoomHome" element={<RoomHome />} />
        <Route path="/room/:id" element={<Room />} />
        {/* Routes to other pages will go here */}
        <Route path="*" element={<Error />} />
      </Routes>
      <FooterComponent />
    </main>

  );
};

export default App;

