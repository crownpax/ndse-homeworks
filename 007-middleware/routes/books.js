import express from 'express';
import Book from '../models/Books.js';
import { fileMulter } from "../middlewares/index.js";

export const router = express.Router();

const bookStorage = {
    books: [new Book()],
};

router.get('/', (req,res) => {
    const { books } = bookStorage;
    res.json(books);
});

router.get('/:id', (req,res) => {
    const {books} = bookStorage;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);

    if( idx !== -1) {
        res.status(200);
        res.json(books[idx]);
    } else {
        res.status(404);
        res.json({result: 'error', desc: 'The book was not found!'});
    }
});

router.post('/', fileMulter.single('book'), (req,res) => {
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
        fileName,
        req.file
    );
    books.push(newBook);

    res.status(201);
    res.json(newBook);
});

router.put('/:id', fileMulter.single('book'), (req,res) => {
    const {books} = bookStorage;
    const {
        title,
        description,
        authors,
        favorite,
        fileCover,
        fileName,
        fileBook
    } = req.body;
    const {id} = req.params;
    const {filename, path} = req.file;

    const idx = books.findIndex(el => el.id === id);

    if (idx !== -1){
        books[idx] = {
            ...books[idx],
            title,
            description,
            authors,
            favorite,
            fileCover,
            fileName: filename || fileName,
            fileBook: path || fileBook
        }

        res.status(200);
        res.json(books[idx]);
    } else {
        res.status(404);
        res.json({result: 'error', desc: 'You have got some error!'});
    }
});

router.delete('/:id', (req,res) => {
    const {books} = bookStorage;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);

    if(idx !== -1){
        books.splice(idx, 1);
        res.status(200);
        res.json({result: 'ok', desc: 'The book was successfully deleted'});
    } else {
        res.status(400);
        res.json({result: 'error', desc: 'The book does not exist!'});
    }
});

router.get('/:id/download', (req,res) => {
    if(req.file){
        const {path} = req.file;
        res.json({path});
    }
    res.json();
});

