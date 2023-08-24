const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const { createServer, get } = require("http");
const { Server } = require("socket.io");
const roomHandler = require("./game/roomHandler");
const { getQuestions } = require('./question-api/question-api')

const app = express();
dotenv.config();

//Included cors so my API could communicate with my react component. 
app.use(cors());

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

// Meg Question API 
// API route to get a set of shuffled questions
app.get('/api/questions/random', async (req, res) => {
  const questionSet = await getQuestions();
  res.json({ questions: questionSet });
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