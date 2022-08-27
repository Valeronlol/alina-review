const reviewsModel = require('../services/reviews');
const { createNewReview, getReviewsList } = require('../services/data-client');

exports.getReviews = async (req, res) => {
    const reviews = await getReviewsList();
    res.send(reviews);
}

exports.uploadReview = async (req, res) => {
    const success = await reviewsModel.upload(req);
    const textReview = success.fields.review;
    const imagePath = success.files.multipleFiles.filepath;
    const newReview = {
        textReview: textReview,
        imagePath: imagePath
    };
    const review = await createNewReview(newReview);
    res.send(review);
}
