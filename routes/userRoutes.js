const express = require('express');
const userController = require('../controllers/userController');

const { getAllUSers, createUser, getUser, updateUser, deleteUser } =
  userController;

const router = express.Router();

router.route('/').get(getAllUSers).post(createUser);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
