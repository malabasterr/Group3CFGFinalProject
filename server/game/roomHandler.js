const shortId = require("shortid");

// This function handles room-related logic using socket.io
const roomHandler = (io, socket, rooms, cachedQuestions) => {

  // Function to create a new room based on payload data
  const create = (payload, callback) => {
    if (payload.type === "stranger") {

      // Find an available room that is not private
      const index = rooms.findIndex(
        (room) => room.vacant === true && room.private === false
      );
      if (index >= 0) {

        // Join an available room
        const room = rooms[index];
        room.players[socket.id] = {
          option: null,
          optionLock: false,
          score: 0,
        };
        room.vacant = false;
        socket.join(room.roomId);
        io.to(room.roomId).emit("room:get", room);
        callback(null, room.roomId);

      } else {
        // Create a new room if no available room is found
        const room = {
          roomId: shortId.generate(),
          players: {
            [socket.id]: {
              option: null,
              optionLock: false,
              score: 0,
            },
          },
          vacant: true,
          private: false,
          type: payload.type,
        };
        rooms.push(room);
        socket.join(room.roomId);

        io.to(room.roomId).emit("room:get", room);
        callback(null, room.roomId);

      }
    } else {
      // Create a private room if payload type is not "stranger" - NOT REQUIRED. May be required when linking with Niki's work...
    }
  };

  // Function to handle a player joining a room
  const join = (payload, callback) => {
    const index = rooms.findIndex((room) => room.roomId === payload.roomId);
    if (index >= 0) {
      const room = rooms[index];

      if (room.players[socket.id]) {
        // Player is already in the room, return a callback indicating success (null)
        return callback(null);
      }

      if (room.vacant && room.private) { //I am pretty sure this bit isn't running because the room is not private. May need it further down the line
        room.players[socket.id] = {
          option: null,
          optionLock: false,
          score: 0,
        };
        room.vacant = false;
        rooms.push(room);
        socket.join(room.roomId);
        io.to(room.roomId).emit("room:get", room);
        callback(null, room);
      } else {
        callback({ error: true });
      }
    } else {
      callback({ error: true });
    }
  };

  // Function to handle room updates
  const update = (payload) => {
    const index = rooms.findIndex((room) => room.roomId === payload.roomId);
    if (index >= 0) {
      rooms[index] = payload;
      io.to(payload.roomId).emit("room:get", payload);
    }
  };

  // Listen for "room:create" event and execute the create function
  socket.on("room:create", create);
  // Listen for "room:join" event and execute the join function
  socket.on("room:join", join);
  // Listen for "room:update" event and execute the update function
  socket.on("room:update", update);
};

// Export the roomHandler function
module.exports = roomHandler;