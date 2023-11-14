const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllUSers = catchAsync(async (req, res, next) => {
  // const features = new APIFeatures(User.find(), req.query)
  //   .filter()
  //   .sort()
  //   .limitFields()
  //   .paginate();

  const tours = await User.find();

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      tours,
    },
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This route is not yet defined!',
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This route is not yet defined!',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This route is not yet defined!',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This route is not yet defined!',
  });
};
