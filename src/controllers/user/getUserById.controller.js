const service = require('../../services/user/getUserById.service');

module.exports = async (req, res) => {
  const { id } = req.params;
  const result = await service(id);

  if (result) return res.status(200).json(result);

  res.status(404).json({ message: 'User does not exist' });
};