import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //Bootstrap import
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';  // Import Provider
import store from './redux/store.js';      // Import the Redux store
import Homepage from './components/homepage/Homepage';
import Error from './components/Error';
import LoginSignup from './components/loginSignup/LoginSignup.js';
import HeaderComponent from './components/header/HeaderComponent.js';
import FooterComponent from './components/footer/FooterComponent.js';
import GameRoom from './components/game/GameRoom';
import GameHome from './components/game/GameHome';

function App() {
  return (
    <Provider store={store}>
      <main>
        <div className="app-container">
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/SigninLoginPage.js" element={<LoginSignup />} />
            <Route path="/RoomHome" element={<GameHome />} />
            <Route path="/room/:id" element={<GameRoom />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <FooterComponent />
        </div>
      </main>
    </Provider>
  );
};

export default App;

