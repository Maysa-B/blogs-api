const { Category, BlogPost, PostCategory } = require('../../models');

const verifyIds = async (array) => {
  const isThereId = await Category.findAndCountAll({
    where: {
      id: array,
    },
  });

  if (isThereId.count !== array.length || array.length === 0) {
    return false;
  }

  return true;
};

const addPost = async (title, content, userId) => {
  const post = await BlogPost.create({
    title,
    content,
    userId,
    updated: new Date(),
    published: new Date(),
  });

  return post;
};

const addPostCategories = (postId, categoryIds) => {
  try {
    categoryIds.forEach(async (categoryId) => {
      await PostCategory.create({ postId, categoryId });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = async ({ title, content, categoryIds }, userId) => {
  if (!title || !content || !categoryIds) {
    return { type: 400, message: 'Some required fields are missing' };
  }

  const verifyResult = await verifyIds(categoryIds);

  if (!verifyResult) return { type: 400, message: '"categoryIds" not found' };

  const post = await addPost(title, content, userId);
  addPostCategories(post.null, categoryIds);

  post.id = post.null;

  return post;
};