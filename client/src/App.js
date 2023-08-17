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



function App() {
  return (
    <main>
      <HeaderComponent />
      
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/SigninLoginPage.js" element={<LoginSignup />} />
        {/* Routes to other pages will go here */}
        <Route path="*" element={<Error />} />
      </Routes>
      <FooterComponent />
    </main>

  );
};

export default App;

