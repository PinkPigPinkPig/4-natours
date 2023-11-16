const mongoose = require('mongoose');
// const slugify = require('slugify');
// const User = require('./userModel');

// review / rating / createdAt / ref to tour / ref to user

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: [true, 'Review cannot be empty!'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.model('Tour', reviewSchema);

module.exports = Review;
