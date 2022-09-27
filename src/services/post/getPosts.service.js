const findPostHelper = require('./findPostHelper');

module.exports = async (userId) => {
  const posts = await findPostHelper({ userId });

  return posts;
};