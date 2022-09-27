const express = require('express');
const controllers = require('../controllers');
const authMiddleware = require('../middleware/tokenMiddleware');

const route = express.Router();

route.post('/', authMiddleware, controllers.newCategory);
route.get('/', authMiddleware, controllers.getCategories);

module.exports = route;