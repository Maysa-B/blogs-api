const findPostHelper = require('./findPostHelper');

module.exports = async () => {
  const posts = await findPostHelper();

  return posts;
};