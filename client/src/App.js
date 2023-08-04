import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Bootstrap import
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Error from './components/Error';
<<<<<<< Updated upstream

function App() {
    return (
      <main>
=======
import Login from './components/Login';
import SignUp from './components/SignUp';
import Homepage from './components/Homepage';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <main>
      <HeaderComponent />
      
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Routes to other pages will go here */}
        <Route path="*" element={<Error />} />
      </Routes>
      <FooterComponent />
    </main>
  );
}
>>>>>>> Stashed changes

        <Routes >
          <Route path="/" element={<Homepage />} />
          {/* Routes to other pages would go here */}
          <Route path="*" element={<Error />} />
        </Routes>

      </main>
    );
};

export default App