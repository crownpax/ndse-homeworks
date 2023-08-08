import express from 'express';
import { getStart } from '../controllers/index.js';

export const router = express.Router();

router.get('/', getStart);