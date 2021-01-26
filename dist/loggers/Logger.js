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
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston = __importStar(require("winston"));
const winston_1 = require("winston");
const dotenv = __importStar(require("dotenv"));
const fs = __importStar(require("fs"));
dotenv.config();
const serviceName = process.env.SERVICE_NAME || 'Nameless Service';
const logLevel = process.env.LOG_LEVEL || 'info';
const baseLogPath = `./logs`;
if (!fs.existsSync(baseLogPath)) {
    fs.mkdirSync(baseLogPath);
}
const tabSeparated = winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.splat(), winston_1.format.printf((info) => `${info.timestamp}|${info.level}|${info.message}`));
exports.logger = winston.createLogger({
    level: logLevel,
    format: tabSeparated,
    defaultMeta: { service: serviceName },
    transports: [
        new winston.transports.File({
            filename: `${baseLogPath}/error.log`,
            level: 'error',
        }),
        new winston.transports.File({ filename: `${baseLogPath}/general.log` }),
    ],
});
if (process.env.NODE_ENV !== 'production') {
    exports.logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xvZ2dlcnMvTG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBbUM7QUFDbkMscUNBQWlDO0FBQ2pDLCtDQUFpQztBQUNqQyx1Q0FBeUI7QUFFekIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhCLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLGtCQUFrQixDQUFDO0FBQ25FLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQztBQUNqRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUM7QUFDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUU7SUFDL0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztDQUMzQjtBQUVELE1BQU0sWUFBWSxHQUFHLGdCQUFNLENBQUMsT0FBTyxDQUNqQyxnQkFBTSxDQUFDLFNBQVMsRUFBRSxFQUNsQixnQkFBTSxDQUFDLEtBQUssRUFBRSxFQUNkLGdCQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FDM0UsQ0FBQztBQUVXLFFBQUEsTUFBTSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7SUFDekMsS0FBSyxFQUFFLFFBQVE7SUFDZixNQUFNLEVBQUUsWUFBWTtJQUNwQixXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO0lBQ3JDLFVBQVUsRUFBRTtRQUtWLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDMUIsUUFBUSxFQUFFLEdBQUcsV0FBVyxZQUFZO1lBQ3BDLEtBQUssRUFBRSxPQUFPO1NBQ2YsQ0FBQztRQUNGLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxXQUFXLGNBQWMsRUFBRSxDQUFDO0tBQ3hFO0NBQ0YsQ0FBQyxDQUFDO0FBTUgsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLEVBQUU7SUFDekMsY0FBTSxDQUFDLEdBQUcsQ0FDUixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQzdCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtLQUNoQyxDQUFDLENBQ0gsQ0FBQztDQUNIIn0=