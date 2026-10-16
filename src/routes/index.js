import express from 'express';
import { showHome } from '../controllers/homeController.js';
import {
  showUsers,
  showNewUserForm,
  showUser,
  showEditUserForm,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', showHome);

router.get('/users', showUsers);
router.get('/users/new', showNewUserForm);
router.get('/users/:id', showUser);
router.get('/users/:id/edit', showEditUserForm);

export default router;
