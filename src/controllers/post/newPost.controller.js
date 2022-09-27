const service = require('../../services/post/newPost.service');

module.exports = async (req, res) => {
  const result = await service(req.body, req.decoded);

  if (result.type) return res.status(result.type).json({ message: result.message });

  res.status(201).json(result);
};