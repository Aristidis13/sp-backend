// src/index.js
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 9000; //eslint-disable-line

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server with tsx and watch');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`); //eslint-disable-line
});
