const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const {
  signUp,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
  restrictTo,
} = authController;

const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  updateMe,
  deleteMe,
  getMe,
} = userController;

const router = express.Router();

router.post('/signup', signUp);

router.post('/login', login);

router.post('/forgotPassword', forgotPassword);

router.patch('/resetPassword/:token', resetPassword);

// Protect all routes after this middleware
router.use(protect);

router.patch('/updatePassword', protect, updatePassword);

router.get('/me', protect, getMe, getUser);

router.patch('/updateMe', protect, updateMe);

router.delete('/deleteMe', protect, deleteMe);

// Need role to do this action
router.use(restrictTo('admin'));

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
