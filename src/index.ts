import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import authrouter from './modules/auth/auth.js';
import { globalErrorHandling } from './middleware/error.middleware.js';
import { PORT } from './config/config.js';
import { connectDB } from './database/db.js';

const app : express.Application = express();
app.use(express.json());
connectDB(app,PORT);

app.all('/',async (req: express.Request, res: express.Response,next: express.NextFunction):Promise<express.Response> => {
  return res.send('Hello, World!');
});
app.use('/auth',authrouter)
app.use(globalErrorHandling)