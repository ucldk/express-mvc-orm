import express from 'express';
import { getUsers } from '../controllers/api/userApiController.js';

const router = express.Router();

router.get('/status', (req, res) => res.json({ status: 'API is running' }));

router.get('/users', getUsers);

export default router;
