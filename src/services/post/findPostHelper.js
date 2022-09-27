const { BlogPost, User, Category } = require('../../models');

module.exports = async (condition) => {
  const post = await BlogPost.findAll({
    where: condition,
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return post;
};