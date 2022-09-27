const service = require('../../services/post/atualizePost.service');

module.exports = async (req, res) => {
  const result = await service(req.decoded, req.params.id, req.body);

  if (result.type) return res.status(result.type).json({ message: result.message });

  res.status(200).json(result);
};