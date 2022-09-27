const findPostHelper = require('./findPostHelper');

module.exports = async (userId, id) => {
  const post = await findPostHelper({ userId, id });

  return post[0];
};