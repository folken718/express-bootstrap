import { app } from './app';
import * as http from 'http';
import { logger } from './loggers/Logger';
import {Server, Socket} from 'socket.io';
import * as dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 4000;
const server = http.createServer(app);

// Creating socket server
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    }
});

const getApiAndEmit = (socket: Socket) => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

let interval: NodeJS.Timeout;

io.on("connection", (socket: Socket) => {
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

// When socket io you start listening here NOT IN THE APP!!
server.listen(port, () => {
  console.log(`Listening on port: ${port}`);
  
});

process.on('SIGTERM', () => {
  logger.debug('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    logger.debug('HTTP server closed');
  });
});
