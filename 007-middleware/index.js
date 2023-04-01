import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { getHeaders } from "./middlewares/index.js";
import {rootRouter, userRouter, booksRouter} from './routes/index.js';
import {PORT} from './config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());
app.use(getHeaders);
app.use(cors());

app.use('/', rootRouter);
app.use('/api/user', userRouter);
app.use('/api/books', booksRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})