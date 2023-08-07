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

    const {
        id,
        title,
        description,
        authors,
        favorite,
        fileCover,
    } = req.body;

    const newBook = new Book(
        id,
        title,
        description,
        authors,
        favorite,
        fileCover,
        req?.file?.filename,
        req?.file?.path
    );

    const {books} = bookStorage;

    if(!req.file) {
        return res.status(404).json({result: 'error', desc: 'You should to transfer a book key with file'});
    }

    books.push(newBook);

    res.status(201);
    res.json(newBook);
});

router.put('/:id', fileMulter.single('book'), (req,res) => {

    const {
        title,
        description,
        authors,
        favorite,
        fileCover,
    } = req.body;
    const {id} = req.params;

    const {books} = bookStorage;

    const idx = books.findIndex(el => el.id === id);

    if(!req.file) {
        return res.status(404).json({result: 'error', desc: 'You should to transfer a book key with file'});
    }

    if (idx !== -1){
        books[idx] = {
            ...books[idx],
            title,
            description,
            authors,
            favorite,
            fileCover,
            fileName: req?.file?.filename,
            fileBook: req?.file?.path
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
    const idx = books.findIndex((book) => book.id === id);

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
    const { id } = req.params;

    const {books} = bookStorage;

    const findBook = books.find((book) => book.id === id);
    const path = findBook.fileBook;

    res.download(path);
    res.status(200);
    res.send({ findBook });
});

