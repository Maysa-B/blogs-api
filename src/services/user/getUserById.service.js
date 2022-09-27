const { User } = require('../../models');

module.exports = async (id) => {
  const result = await User.findOne({
    where: { id },
    attributes: ['id', 'displayName', 'email', 'image'],
  });

  return result;
};
