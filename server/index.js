const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const { createServer, get } = require("http");
const { Server } = require("socket.io");
const roomHandler = require("./game/roomHandler");
// const { getQuestions } = require('./question-api/question-api')
const { findUser } = require('./login/loginDB'); 
const { getQuestionsFromDB } = require("./question-api/db");

const app = express();
dotenv.config();

//Included cors so my API could communicate with my react component. 
app.use(cors());
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*" },
});

const rooms = [];
const cachedQuestions = null;

// Game Socket API
io.on("connection", (socket) => {
  console.log("connected", socket.id);
  roomHandler(io, socket, rooms, cachedQuestions);

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


app.post('/api/reset-cache', (req, res) => {
  cacheQuestions = null;
  res.status(204).send();
});


async function getQuestions() {
  console.log("questions being fetched");
  if (!cacheQuestions) {
    let dbQuestions = await getQuestionsFromDB();
    shuffleArray(dbQuestions);
    cacheQuestions = dbQuestions.slice(0, maxQuestions);
  }
    //This is selecting the first 10 Questions in the shuffled array.
    return cacheQuestions;
}

// Meg Question API 
// API route to get a set of shuffled questions
app.get('/api/questions/random', async (req, res) => {
  const questionSet = await getQuestions();
  res.json({ questions: questionSet });
});












// LOGIN LINKS
app.post('/login', async (req, res) => {
  try {
      // Get values for username and password
      console.log('LoginME!');
      const username = req.body.username;
      const password = req.body.password;

      // This fetches the user from the database (or null if they dont't exist)
      const user = await findUser(username, password);

      if (user) {
          // If we find the user - return their details
          res.json({ success: true, message: 'Login successful', name:user.firstname + " " + user.lastname });
      } else {
          // No user - no access
          res.status(400).json({ success: false, message: 'Invalid credentials' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'An error occurred' });
  }
});







// // Defining the index and the max amount of questions. 
// let lastQuestionIndex = 0;
// const maxQuestions = 10;

// // Function that shuffles the questions array using the Fisher-Yates shuffle algorithm
// function shuffleArray(array) {
// for (let i = array.length - 1; i > 0; i--) {
//   const j = Math.floor(Math.random() * (i + 1));
//   [array[i], array[j]] = [array[j], array[i]];
// }
// }

// shuffleArray(questions);

// // API route to retrieve a set of shuffled questions
// app.get('/api/questions/random', (req, res) => {
// //This is selecting the first 10 Questions in the shuffled array.
// const questionSet = questions.slice(lastQuestionIndex, maxQuestions);
// //This is the format passed to the QuizSlider component
// res.json({ questions: questionSet });
// });

// // API route to reshuffle and retrieve questions
// app.get('/api/questions/reshuffle', (req, res) => {
//   shuffleArray(questions); // Reshuffle the questions array
//   const questionSet = questions.slice(lastQuestionIndex, maxQuestions);
//   res.json({ questions: questionSet });
// });

const port = process.env.PORT || 1234;
httpServer.listen(port, () => console.log(`Listening on port ${port}`));