const mysql = require('mysql2/promise');

// Connection configuration
const connectionConfig = {
    host: 'inyim.c4qxxatckr37.us-east-1.rds.amazonaws.com',
    user: 'inyimadmin',
    password: 'inyim76hg$hg',
    database: 'inyim',
};

// Function to find a user by username and password
const registerUser = async (firstname, lastname, username, password) => {
    const connection = await mysql.createConnection(connectionConfig);
    const [rows] = await connection.execute('INSERT INTO Users (firstname, lastname, username, password) VALUES (?, ?, ?, ?)', [firstname, lastname, username, password]);
    await connection.end();
    return;
  };
  
  module.exports = {
    registerUser,
  };

