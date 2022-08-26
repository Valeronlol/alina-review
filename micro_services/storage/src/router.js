require('dotenv').config();
const Router = require('@koa/router');
const usersHandler = require('./handlers/users');
const usersSchemas = require('./schemas/users');
const validationMiddleware = require('./middleware/validation-middleware');

const router = new Router();

router.post('/reg', usersHandler.createNewUser);
router.post('/login', usersHandler.findUserByLogin);
  
module.exports = router;