import { Request, Response } from 'express';
import express from 'express';
import cookieParser from 'cookie-parser';
import { exampleRouter } from './controllers/Example';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
export const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Controllers
app.use(exampleRouter);


// Basic Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

/*
// Server listening
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
*/