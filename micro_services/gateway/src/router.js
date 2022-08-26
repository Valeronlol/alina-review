const { Router } = require('express');
const mainController = require('./controllers/main');
const reviewsController = require('./controllers/reviews');
const usersController = require('./controllers/users');
const asyncErrorHandler = require('./utils/async-error-handler');
const { checkAuth } = require('./services/auth');
const validationMiddleware = require('./utils/validation-middleware');
const usersSchemas = require('./schemas/users');

const router = Router();

router.get('/', mainController);
router.get('/reviews', asyncErrorHandler(reviewsController.getReviews));
router.post('/reg', validationMiddleware(usersSchemas.createUser), asyncErrorHandler(usersController.addNewUser));
router.post('/login', validationMiddleware(usersSchemas.loginUser), asyncErrorHandler(usersController.loginUser));
router.post('/image/upload', checkAuth, asyncErrorHandler(reviewsController.uploadReview));

module.exports = router;