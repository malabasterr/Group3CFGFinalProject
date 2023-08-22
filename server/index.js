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

// Game Socket API
io.on("connection", (socket) => {
  console.log("connected", socket.id);
  roomHandler(io, socket, rooms);

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


const port = process.env.PORT || 1234;
httpServer.listen(port, () => console.log(`Listening on port ${port}`));