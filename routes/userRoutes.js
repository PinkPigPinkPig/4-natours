const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const { signUp, login, forgotPassword, resetPassword } = authController;

const { getAllUSers, createUser, getUser, updateUser, deleteUser } =
  userController;

const router = express.Router();

router.post('/signup', signUp);

router.post('/login', login);

router.post('/forgotPassword', forgotPassword);

router.patch('/resetPassword/:token', resetPassword);

router.route('/').get(getAllUSers).post(createUser);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
