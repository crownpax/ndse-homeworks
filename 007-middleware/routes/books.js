import express from 'express';
import { fileMulter } from "../middlewares/index.js";
import * as controllers from '../controllers/index.js';

export const router = express.Router();

router.get('/', controllers.getBooks);

router.get('/:id', controllers.getBook);

router.post('/', fileMulter.single('book'), controllers.createBook);

router.put('/:id', fileMulter.single('book'), controllers.updateBook);

router.delete('/:id', controllers.deleteBook);

router.get('/:id/download', controllers.downloadBook);
