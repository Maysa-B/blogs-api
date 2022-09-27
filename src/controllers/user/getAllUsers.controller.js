const service = require('../../services/user/getAllUsers.service');

module.exports = async (_req, res) => {
  const result = await service();
  res.status(200).json(result);
};