const { Review } = require('../services/db');

exports.createNewReview = async (ctx) => {
   ctx.body = await Review.create(ctx.request.body);
}

exports.fetchReviews = async (ctx) => {
  const reviews = await Review.findAll();
  ctx.body = { reviews };
}
