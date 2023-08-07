import express from 'express';
import cors from 'cors';
import { getHeaders } from "./middlewares/index.js";
import * as routers from './routes/index.js';
import {PORT} from './config.js';

const app = express();

app.use(express.json());
app.use(getHeaders);
app.use(cors());

app.use('/', routers.rootRouter);
app.use('/api/user', routers.userRouter);
app.use('/api/books', routers.booksRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})