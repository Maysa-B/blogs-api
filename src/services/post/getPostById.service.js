const findPostHelper = require('./findPostHelper');

module.exports = async (id) => {
  const post = await findPostHelper({ id });

  return post[0];
};