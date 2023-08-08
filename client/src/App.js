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
import ProcessBoxesComponent from './components/ProcessBoxesComponent';


function App() {
  return (
    <main>
      <HeaderComponent />
      
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Routes to other pages will go here */}
        <Route path="*" element={<Error />} />
      </Routes>
      <FooterComponent />
    </main>
  );
};

export default App;

