const express = require('express');
const controllers = require('../controllers');
const authMiddleware = require('../middleware/tokenMiddleware');

const route = express.Router();

route.get('/search', authMiddleware, controllers.searchPost);
route.post('/', authMiddleware, controllers.newPost);
route.get('/', authMiddleware, controllers.getPost);
route.get('/:id', authMiddleware, controllers.getPostById);
route.put('/:id', authMiddleware, controllers.atualizePost);
route.delete('/:id', authMiddleware, controllers.deletePost);

module.exports = route;