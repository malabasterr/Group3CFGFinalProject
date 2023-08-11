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
    <div className='d-flex justify-content-center align-items-start'>
      <div className='signupBorder mt-3'>
        <div className="text-center">
              <label>Sign Up</label>
        </div>

        <div className="mb-3">
              <input className="form-control"
                placeholder="First Name"
                onChange={handleUsernameChange}
              />
        </div>

        <div>
          <input className="form-control"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
          
        <div className="text-center">
          <button className="mainbutton" onClick={signUp}>Sign Up</button>
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default SignUp;
