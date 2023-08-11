import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const login = () => {};
  return (
    <div className="d-flex justify-content-center align-items-start">
      <div className="signupBorder mt-3">
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
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </div>

        <div className="text-center">
          <button className="mainbutton" onClick={login}>PLAY</button>
        </div>

        <div className="text-center">
          <button className="underButton" onClick={login}>Forgot Password</button>
          <button className="underButton" onClick={login}>Create Account</button>
        </div>
      </div>
    </div>
  );
  
  
}

export default Login;
