const mysql = require('mysql2/promise');

// Connection configuration
const connectionConfig = {
  host: 'inyim.c4qxxatckr37.us-east-1.rds.amazonaws.com',
  user: 'inyimadmin',
  password: 'inyim76hg$hg',
  database: 'inyim',
};

// Function to find a questions
const getQuestionsFromDB = async (username, password) => {
  const connection = await mysql.createConnection(connectionConfig);
  const [rows] = await connection.execute('SELECT * FROM Questions');
  await connection.end();
  return rows;
};

module.exports = {
    getQuestionsFromDB,
};
