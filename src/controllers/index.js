const login = require('./user/login.controller');
const addUser = require('./user/newUser.controller');
const getAllUsers = require('./user/getAllUsers.controller');
const getUserById = require('./user/getUserById.controller');
const newCategory = require('./category/newCategory.controller');
const getCategories = require('./category/getCategories.controller');
const newPost = require('./post/newPost.controller');
const getPost = require('./post/getPosts.controller');
const getPostById = require('./post/getPostsById.controller');
const atualizePost = require('./post/atualizePost.controller');
const deletePost = require('./post/deletePost.controller');
const deleteUser = require('./user/deleteUser.controller');
const searchPost = require('./post/searchPost.controller');

module.exports = {
  login,
  addUser,
  getAllUsers,
  getUserById,
  newCategory,
  getCategories,
  newPost,
  getPost,
  getPostById,
  atualizePost,
  deletePost,
  deleteUser,
  searchPost,
};