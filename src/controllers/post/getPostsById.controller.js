const service = require('../../services/post/getPostById.service');

module.exports = async (req, res) => {
  const result = await service(req.decoded, req.params.id);

  if (result) return res.status(200).json(result);

  res.status(404).json({ message: 'Post does not exist' });
};