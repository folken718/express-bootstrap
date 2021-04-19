import { app } from './app';
import * as http from 'http';
import { logger } from './loggers/Logger';
import socketIo from 'socket.io';

const server = http.createServer(app);

// Creating socket server
const io = new socketIo.Server(server);

const getApiAndEmit = (socket: socketIo.Socket) => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

let interval: NodeJS.Timeout;

io.on("connection", (socket: socketIo.Socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 2000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});


server.listen(); // although it is not necessary its required if we need to use some other techs like sockets

process.on('SIGTERM', () => {
  logger.debug('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    logger.debug('HTTP server closed');
  });
});
