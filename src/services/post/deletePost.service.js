const { BlogPost } = require('../../models');
const findPostHelper = require('./findPostHelper');

const deletePost = async (id, userId) => {
  const postDeleted = await BlogPost.destroy(
    { where: { id, userId } },
  );

  if (postDeleted !== 0) return postDeleted;

  return { type: 401, message: 'Unauthorized user' };
};

module.exports = async (userId, id) => {
  const postExists = await findPostHelper({ id });
  if (postExists.length === 0) return { type: 404, message: 'Post does not exist' };

  const result = await deletePost(id, userId);
  if (result.type) return result;

  return { type: null };
};
