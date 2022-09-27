const valiation = require('../helpers/validateToken');

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token not found' });

  const result = await valiation(token);
  if (result.type === 401) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  req.decoded = result;
  next();
};