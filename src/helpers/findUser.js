const { User } = require('../models');

module.exports = async (email) => {
  console.log('Esse é o email no findUser', email);
  const userId = await User.findOne({
    where: { email },
  });

  return userId.dataValues.id;
};