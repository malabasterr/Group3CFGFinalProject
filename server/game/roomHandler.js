const shortId = require("shortid");

const roomHandler = (io, socket, rooms) => {

  // Define the create function that handles room creation
  const create = (payload, callback) => {
    if (payload.type === "stranger") {
      const index = rooms.findIndex(
        (room) => room.vacant === true && room.private === false
      );

      if (index >= 0) {
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
        const room = {
          roomId: shortId.generate(), // Generate a unique room ID
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
        rooms.push(room); // Add the newly created room to the rooms array
        socket.join(room.roomId);
        io.to(room.roomId).emit("room:get", room);
        callback(null, room.roomId);
      }

    } else {
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
        private: true,
        type: payload.type,
      };
      rooms.push(room);
      socket.join(room.roomId);
      io.to(room.roomId).emit("room:get", room);
      callback(null, room.roomId);
    }

  };

  // Define the join function that handles joining existing rooms
  const join = (payload, callback) => {
    const index = rooms.findIndex((room) => room.roomId === payload.roomId);
    
    if (index >= 0) {
      const room = rooms[index];
      if (room.players[socket.id]) return callback(null);

      if (room.vacant && room.private) {
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

  // Define the update function that handles updating room data
  const update = (payload) => {
    const index = rooms.findIndex((room) => room.roomId === payload.roomId);
    if (index >= 0) {
      rooms[index] = payload;
      io.to(payload.roomId).emit("room:get", payload);
    }
  };

  // Attach the event listeners for room actions
  socket.on("room:create", create);
  socket.on("room:join", join);
  socket.on("room:update", update);
};

module.exports = roomHandler;
