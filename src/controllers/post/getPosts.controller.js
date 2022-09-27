const service = require('../../services/post/getPosts.service');

module.exports = async (req, res) => {
  const result = await service(req.decoded);
  res.status(200).json(result);
};