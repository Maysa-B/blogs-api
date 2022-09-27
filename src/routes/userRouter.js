const express = require('express');
const controllers = require('../controllers');
const authMiddleware = require('../middleware/tokenMiddleware');

const route = express.Router();

route.post('/', controllers.addUser);
route.get('/', authMiddleware, controllers.getAllUsers);
route.get('/:id', authMiddleware, controllers.getUserById);
route.delete('/me', authMiddleware, controllers.deleteUser);

module.exports = route;