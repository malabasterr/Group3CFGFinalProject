const mysql = require('mysql2/promise');

// Connection configuration
const connectionConfig = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'INYIM',
};


// Function to find a user by username and password
const findUser = async (username, password) => {
    const connection = await mysql.createConnection(connectionConfig);
    const [rows] = await connection.execute('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
    await connection.end();
  
    if(rows.length == 0) {
      // If there are no rows, no user matches, return null
      return null;
    } else {
      // We can only find one user, so return the first in the array
      return rows[0];
    }
  };
  
  module.exports = {
    findUser,
  };