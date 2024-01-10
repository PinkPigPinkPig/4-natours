const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

const {
  getAllReviews,
  createReview,
  getReview,
  deleteReview,
  updateReview,
  setTourUserIds,
} = reviewController;

const { protect, restrictTo } = authController;

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(protect, getAllReviews)
  .post(protect, restrictTo('user'), setTourUserIds, createReview);

router
  .route('/:id')
  .get(getReview)
  .patch(updateReview)
  .delete(protect, deleteReview);

module.exports = router;
