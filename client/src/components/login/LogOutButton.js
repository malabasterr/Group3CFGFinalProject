// LogoutButton.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function LogoutButton() {
  const username = useSelector(state => state.username);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Get the navigate function

  const handleLogout = () => {
    dispatch(logout());
    navigate('/'); //Navigate to homepage
  };

  return (
    <div>
      {username ? (
        <>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}

export default LogoutButton;