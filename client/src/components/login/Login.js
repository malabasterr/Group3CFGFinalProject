
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';  // Importing Redux's useDispatch hook
import { setUsername } from '../../redux/actions';  // Ensure path is correct!
import './Login.css';
import axios from "axios";
import LoginSignup from '../loginSignup/LoginSignup';

function Login() {
  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();  // This function lets us send actions to our Redux store
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsernameInput(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log("Login", usernameInput, password)
    axios.post(
      "http://localhost:1234/login", 
      {
        username: usernameInput,
        password: password
      })
      .then(response => {
        console.log(response.data);
        // After a successful login, we set the username in our Redux store
        dispatch(setUsername(`${response.data.name} (${usernameInput}) `));  // Here we dispatch the setUsername action
        navigate('/RoomHome');
      })
      .catch(error => {
        console.log(error);
        navigate('/loginUnsuccessful');// add error for unsuccessful login
      });
      
  };
  const login = () => {};
  return (
    <div>
    <div className="d-flex justify-content-center align-items-start">
      <div className="signupBorder flex-fill" >
        <div className="text-center">
          <label className='LoginTitle'>Log in to Play!</label>
        </div>
  
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Username"
            onChange={handleUsernameChange}
          />
        </div>
  
        <div className="mb-3">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </div>

        <div className="text-center">
          <button className="mainButton" onClick={handleLogin}>PLAY</button>
        </div>

        <div className="text-center">
          <button className="underButton" onClick={login}>Forgot Password</button>
          <button className="underButton" onClick={LoginSignup}>Create Account</button>
          
        </div>
      </div>
    </div>
    </div>
  );
  
  
}

export default Login;
