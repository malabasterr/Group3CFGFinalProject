import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //Bootstrap import
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Error from './components/Error';
import LoginSignup from './components/SigninLoginPage.js';
import HeaderComponent from './components/header/HeaderComponent.js';
import FooterComponent from './components/footer/FooterComponent.js';
import Room from './components/game/Room';
import RoomHome from './components/game/RoomHome';


function App() {
  return (
    <main>
      <HeaderComponent />

      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/SigninLoginPage.js" element={<LoginSignup />} />
        {/* RoomHome is not a real path we will use at the end, I (Maddy) am using it to test my features */}
        <Route path="/RoomHome" element={<RoomHome />} />
        <Route path="/room/:id" element={<Room />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
      <FooterComponent />

    </main>

  );
};

export default App;

