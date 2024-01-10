const Review = require('../models/reviewModel');
const factory = require('./handlerFactory');

const { deleteOne, updateOne, createOne, getOne, getAll } = factory;

exports.setTourUserIds = (req, res, next) => {
  // Allowed nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllReviews = getAll(Review);

exports.createReview = createOne(Review);

exports.getReview = getOne(Review);

exports.updateReview = updateOne(Review);

exports.deleteReview = deleteOne(Review);
