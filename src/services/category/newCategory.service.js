const { Category } = require('../../models');

module.exports = async (name) => {
  if (name === undefined) return { type: 400, message: '"name" is required' };

  const result = await Category.create({ name });

  return result;
};