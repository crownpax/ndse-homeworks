import express from 'express';
import { createLogin } from '../controllers/index.js';

export const router = express.Router();

router.post('/login', createLogin);