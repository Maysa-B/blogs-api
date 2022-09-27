const { User } = require('../../models');

module.exports = async (body) => {
  if (!body.email || !body.password) return { type: 'Some required fields are missing' };

  const result = await User.findAll({ where: { email: body.email, password: body.password } });

  if (result.length === 0) return { type: 'Invalid fields' };

  return { type: null };
};