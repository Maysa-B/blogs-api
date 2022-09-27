require('dotenv').config();
const jwt = require('jsonwebtoken');
const findUser = require('./findUser');

const secret = process.env.JWT_SECRET;

module.exports = async (token) => {
  try {
    const result = jwt.verify(token, secret);
    console.log('Esse é o resultado de quando verificamos token', result);
    console.log('esse é o email que sai daqui', result.email);
    const userId = await findUser(result.email);
    return userId;
  } catch (err) {
    console.log(err);
    return { type: 401 };
  }
};