import Router, { Request, Response } from 'express';
import { logger } from '../loggers/Logger';

export const exampleRouter = Router();

exampleRouter.get('/example', (req: Request, res: Response) => {
  logger.info('/example');
  res.sendStatus(200);
});

exampleRouter.post('/example', (req: Request, res: Response) => {
  console.log(`Hello ${req.body.name}`);
  res.sendStatus(200);
});
