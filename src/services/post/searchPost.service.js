const sequelize = require('sequelize');
const findPostHelper = require('./findPostHelper');

const op = sequelize.Op;

module.exports = async (query) => {
  const searchTerm = `%${query}%`;

  const posts = await findPostHelper({
    [op.or]: { title: { [op.like]: searchTerm }, content: { [op.like]: searchTerm } },
  });

  return posts;
};