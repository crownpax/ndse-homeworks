import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Book from './models/Books.js';
import {PORT} from './config.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const bookStorage = {
    books: [new Book()],
  };

app.get('/', function(req, res) {
    res.send("Let is get it started!");
});

app.post('/api/user/login', (req,res) => {
    res.status(201);
    res.json({id: 1, mail: "test@mail.ru"});
});

app.get('/api/books', (req,res) => {
    const { books } = bookStorage;
    res.json(books);
});

app.get('/api/books/:id', (req,res) => {
    const {books} = bookStorage;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);

    if( idx !== -1) {
        res.status(200);
        res.json(books[idx]);
    } else {
        res.status(400);
        res.json('The book was not found!');
    }
});

app.post('/api/books', (req,res) => {
    const {books} = bookStorage;
    const {
        title,
        description,
        authors,
        favorite,
        fileCover,
        fileName
    } = req.body;

    const newBook = new Book(
        title,
        description,
        authors,
        favorite,
        fileCover,
        fileName
    );
    books.push(newBook);

    res.status(201);
    res.json(newBook);
});

app.put('/api/books/:id', (req,res) => {
    const {books} = bookStorage;
    const {
        title,
        description,
        authors,
        favorite,
        fileCover,
        fileName
    } = req.body;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);

    if (idx !== -1){
        books[idx] = {
            ...books[idx],
            title,
            description,
            authors,
            favorite,
            fileCover,
            fileName
        }

        res.status(200);
        res.json(books[idx]);
    } else {
        res.status(400);
        res.json('You have got some error!');
    }
});

app.delete('/api/books/:id', (req,res) => {
    const {books} = bookStorage;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);

    if(idx !== -1){
        books.splice(idx, 1);
        res.status(200);
        res.json({result: true, desc: "The book was successfully deleted"});
    } else {
        res.status(400);
        res.json('The book does not exist!');
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})