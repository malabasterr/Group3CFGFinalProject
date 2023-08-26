import React from 'react';
import { useSelector } from 'react-redux';

function HomePage() {
  // Getting the username from the Redux store
  const username = useSelector(state => state.username);

  return (
    <div>
      {username ? (
        <h2>Welcome, {username}!</h2>
      ) : (
        <h2></h2>
      )}
    </div>
  );
}

export default HomePage;