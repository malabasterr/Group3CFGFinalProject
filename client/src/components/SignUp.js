import React, { useState } from 'react';

function SignUp() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleUsernameChange = (event) => {
    setUser({ ...user, username: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  const signUp = () => {};

  return (
    <div>
      <label>Sign Up</label>
      <input
        placeholder="Username"
        onChange={handleUsernameChange}
      />
      <input
        placeholder="Password"
        onChange={handlePasswordChange}
      />
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;
