import { app } from './app';
import * as http from 'http';
import { logger } from './loggers/Logger';
import socketIo from 'socket.io';

const server = http.createServer(app);

// Creating socket server
const io = new socketIo.Server(server);

server.listen(); // although it is not necessary its required if we need to use some other techs like sockets

process.on('SIGTERM', () => {
  logger.debug('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    logger.debug('HTTP server closed');
  });
});
