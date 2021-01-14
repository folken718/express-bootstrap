import * as winston from 'winston';
import { format } from 'winston';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config();

const serviceName = process.env.SERVICE_NAME || 'Nameless Service';
const logLevel = process.env.LOG_LEVEL || 'info';
const baseLogPath = `./logs`;
if (!fs.existsSync(baseLogPath)) {
  fs.mkdirSync(baseLogPath);
}

const tabSeparated = format.combine(
  format.timestamp(),
  format.splat(),
  format.printf((info) => `${info.timestamp}|${info.level}|${info.message}`)
);

export const logger = winston.createLogger({
  level: logLevel,
  format: tabSeparated,
  defaultMeta: { service: serviceName },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({
      filename: `${baseLogPath}/error.log`,
      level: 'error',
    }),
    new winston.transports.File({ filename: `${baseLogPath}/general.log` }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}
