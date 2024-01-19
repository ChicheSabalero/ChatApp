const http = require("http");

const server = http.createServer();

const io = require("socket.io")(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("New Client Connected");
  socket.broadcast.emit("chat_message", {
    user: "info",
    message: "New User Found",
  });
  socket.on("chat_message", (data) => {
    io.emit("chat_message", data);
    console.log(data);
  });
});

server.listen(8080);
