const express = require('express');
const app = express();

const dotenv = require("dotenv");
const { createServer } = require("http");
const { Server } = require("socket.io");
const roomHandler = require("./game/roomHandler");

dotenv.config();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*" },
});

const rooms = [];

io.on("connection", (socket) => {
  console.log("connected", socket.id);
  roomHandler(io, socket, rooms);

  socket.on("disconnect", () => {
    console.log("disconnected", socket.id);
  });
});

const port = process.env.PORT || 1234;
httpServer.listen(port, () => console.log(`Listening on port ${port}`));
