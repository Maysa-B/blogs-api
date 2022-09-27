const service = require('../../services/user/newUser.service');
const generateToken = require('../../helpers/generateToken');

module.exports = async (req, res) => {
  const result = await service(req.body);

  if (result.type) return res.status(result.type).json({ message: result.message });

  const token = generateToken(result.message);

  res.status(201).json({ token });
};