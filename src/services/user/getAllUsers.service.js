const { User } = require('../../models');

module.exports = async () => {
  const result = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });

  return result;
};