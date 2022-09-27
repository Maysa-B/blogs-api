const { BlogPost } = require('../../models');
const findPostHelper = require('./findPostHelper');

const update = async (title, content, id, userId) => {
  const postAtualized = await BlogPost.update(
    { title, content, updated: new Date() },
    { where: { id, userId } },
  );

  if (postAtualized[0] !== 0) return postAtualized;

  return { type: 401, message: 'Unauthorized user' };
};

module.exports = async (userId, id, { title, content }) => {
  if (!title || !content) return { type: 400, message: 'Some required fields are missing' };

  const result = await update(title, content, id, userId);
  if (result.type) return result;

  const postAtualizado = await findPostHelper({ id });
  return postAtualizado[0];
};
