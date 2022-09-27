const service = require('../../services/post/deletePost.service');

module.exports = async (req, res) => {
  const result = await service(req.decoded, req.params.id);

  if (result.type) return res.status(result.type).json({ message: result.message });

  res.sendStatus(204);
};