const service = require('../../services/post/searchPost.service');

module.exports = async (req, res) => {
  const result = await service(req.query.q);

  res.status(200).json(result);
};