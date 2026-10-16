import express from 'express';
import { showHome } from '../controllers/homeController.js';
import { showUsers } from '../controllers/userController.js';

const router = express.Router();

router.get('/', showHome);
router.get('/users', showUsers);

export default router;
