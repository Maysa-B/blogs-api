const service = require('../../services/category/getCategories.service');

module.exports = async (_req, res) => {
  const result = await service();
  res.status(200).json(result);
};