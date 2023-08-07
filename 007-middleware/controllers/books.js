import Book from '../models/Books.js';

const bookStorage = {
    books: [new Book()],
};

export const getBooks = (req,res) => {
    const { books } = bookStorage;

    res.json(books);
};

export const getBook = (req,res) => {
    const {id} = req.params;

    const {books} = bookStorage;

    const idx = books.findIndex(el => el.id === id);

    if( idx !== -1) {
        res.status(200);
        res.json(books[idx]);
    } else {
        res.status(404);
        res.json({result: 'error', desc: 'The book was not found!'});
    }
};

export const createBook = (req,res) => {
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
};

export const updateBook = (req,res) => {
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
};

export const deleteBook = (req,res) => {
    const {id} = req.params;

    const {books} = bookStorage;

    const idx = books.findIndex((book) => book.id === id);


    if(idx !== -1){
        books.splice(idx, 1);
        res.status(200);
        res.json({result: 'ok', desc: 'The book was successfully deleted'});
    } else {
        res.status(400);
        res.json({result: 'error', desc: 'The book does not exist!'});
    }
};

export const downloadBook = (req,res) => {
    const { id } = req.params;

    const {books} = bookStorage;

    const findBook = books.find((book) => book.id === id);
    const path = findBook.fileBook;

    res.download(path);
    res.status(200);
    res.send({ findBook });
};
