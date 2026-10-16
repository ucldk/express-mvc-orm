const express = require('express');
const { showHome } = require('../controllers/homeController');
const {
  showUsers,
  showNewUserForm,
  showUser,
  showEditUserForm,
} = require('../controllers/userController');

const router = express.Router();

router.get('/', showHome);

router.get('/users', showUsers);
router.get('/users/new', showNewUserForm);
router.get('/users/:id', showUser);
router.get('/users/:id/edit', showEditUserForm);

module.exports = router;
