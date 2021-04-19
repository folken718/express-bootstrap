"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const http = __importStar(require("http"));
const Logger_1 = require("./loggers/Logger");
const socket_io_1 = __importDefault(require("socket.io"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const port = process.env.PORT || 4000;
const server = http.createServer(app_1.app);
const io = new socket_io_1.default.Server(server);
const getApiAndEmit = (socket) => {
    const response = new Date();
    socket.emit("FromAPI", response);
};
let interval;
io.on("connection", (socket) => {
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
server.listen();
process.on('SIGTERM', () => {
    Logger_1.logger.debug('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        Logger_1.logger.debug('HTTP server closed');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFDNUIsMkNBQTZCO0FBQzdCLDZDQUEwQztBQUMxQywwREFBaUM7QUFDakMsK0NBQWlDO0FBRWpDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFFdEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFHLENBQUMsQ0FBQztBQUd0QyxNQUFNLEVBQUUsR0FBRyxJQUFJLG1CQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRXZDLE1BQU0sYUFBYSxHQUFHLENBQUMsTUFBdUIsRUFBRSxFQUFFO0lBQ2hELE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFFNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUYsSUFBSSxRQUF3QixDQUFDO0FBRTdCLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBdUIsRUFBRSxFQUFFO0lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNwQyxJQUFJLFFBQVEsRUFBRTtRQUNaLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN6QjtJQUNELFFBQVEsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFHSCxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFO0lBQ3pCLGVBQU0sQ0FBQyxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztJQUM3RCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNoQixlQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9