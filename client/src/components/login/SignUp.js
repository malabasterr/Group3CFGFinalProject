import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css'

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:1234/register", formData)

      if (response.data.success) {
        alert('Registration successful!');
        // Redirect or perform other tasks
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-start">
      <div className="signupBorder mt-3" >
        <div className="text-center">
          <label className='LoginTitle'>Sign up</label>
        
          <form onSubmit={handleSubmit}>
            
            <div className='buttonSpacing'><input className='form-control' type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} required /></div>
            <div className='buttonSpacing'><input className='form-control' type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} required /></div>
            <div className='buttonSpacing'><input className='form-control' type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required /></div>
            <div className='buttonSpacing'><input className='form-control' type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required /></div>
            <button className="mainbutton" type="submit">Sign-Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
