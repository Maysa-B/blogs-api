const service = require('../../services/user/login.service');
const generateToken = require('../../helpers/generateToken');

module.exports = async (req, res) => {
  const result = await service(req.body);

  if (result.type) return res.status(400).json({ message: result.type });

  const token = generateToken({ email: req.body.email });

  res.status(200).json({ token });
};