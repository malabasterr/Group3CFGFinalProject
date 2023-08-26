const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const { createServer, get } = require("http");
const { Server } = require("socket.io");
const roomHandler = require("./game/roomHandler");
const { findUser } = require('./login/loginDB'); 
const { getQuestionsFromDB } = require("./question-api/db");
const { registerUser } = require('./registration/signupdb');
const bcrypt = require("bcrypt");

const app = express();
dotenv.config();

// Enable CORS
app.use(cors());
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer, { // Initialize Socket.IO server with CORS settings
  cors: { origin: "*" },
});

const rooms = [];
const cachedQuestions = null;

// Handle socket connections
io.on("connection", (socket) => {
  console.log("connected", socket.id);
  roomHandler(io, socket, rooms, cachedQuestions);

   // Handle socket disconnections
  socket.on("disconnect", () => {
    console.log("disconnected", socket.id);
  });
});

// Defining the index and the max amount of questions. 
let lastQuestionIndex = 0;
const maxQuestions = 10;
let cacheQuestions = null;

// Function that shuffles the questions array using the Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// API route to reset cached questions
app.post('/api/reset-cache', (req, res) => {
  console.log("setting cache to null");
  cacheQuestions = null;
  res.status(204).send();
});

// Function to fetch and cache shuffled questions
async function getQuestions() {
  console.log("questions being fetched");
  if (!cacheQuestions) {
    let dbQuestions = await getQuestionsFromDB();
    shuffleArray(dbQuestions);
    cacheQuestions = dbQuestions.slice(0, maxQuestions);
  }
    return cacheQuestions;
}

// API route to get a set of shuffled questions
app.get('/api/questions/random', async (req, res) => {
  console.log("got questions");
  const questionSet = await getQuestions();
  res.json({ questions: questionSet });
});

// LOGIN ROUTES
app.post('/login', async (req, res) => {
  try {
      // Get values for username and password
      console.log('LoginME!');
      const username = req.body.username;
      const password = req.body.password;

      // This fetches the user from the database
      const user = await findUser(username);

      if (user) {
          // If we find the user - return their details
          if(bcrypt.compare(password, user.password)) {
            res.json({ success: true, message: 'Login successful', name:user.firstname + " " + user.lastname });
          } else {
            res.status(400).json({ success: false, message: 'Invalid credentials' });
          }

      } else {
          // No user - no access
          res.status(400).json({ success: false, message: 'Invalid credentials' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'An error occurred' });
  }
});

// SIGN UP ROUTE
app.post('/register', async (req, res) => {
  const { firstname, lastname, username, password } = req.body;

  if(!firstname || !lastname || !username || !password) {
      return res.status(400).json({ success: false, message: 'Please provide all fields.' });
  }

  // hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // SQL to insert the new user
  await registerUser(firstname, lastname, username, hashedPassword);
  
  res.status(201).json({ success: true, message: 'User registered successfully.' });
});

const port = process.env.PORT || 1234;
httpServer.listen(port, () => console.log(`Listening on port ${port}`));