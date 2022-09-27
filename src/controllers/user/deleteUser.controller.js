const service = require('../../services/user/deleteUser.service');

module.exports = async (req, res) => {
  await service(req.decoded);
  res.sendStatus(204);
};