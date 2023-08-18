import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //Bootstrap import
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Error from './components/Error';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import QuizSlider from './components/QuizSlider';
import './components/QuizSlider.css'


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
     
      <QuizSlider />
    </main>

  );
};

export default App;

