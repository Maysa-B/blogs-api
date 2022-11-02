const service = require('../../services/post/getPosts.service');

module.exports = async (req, res) => {
  const result = await service();
  res.status(200).json(result);
};