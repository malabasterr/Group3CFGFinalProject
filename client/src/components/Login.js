import React, { useState } from 'react';

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
    <div>
      <label>Login</label>
      <input
        placeholder="Username"
        onChange={handleUsernameChange}
      />
      <input
        placeholder="Password"
        onChange={handlePasswordChange}
      />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
