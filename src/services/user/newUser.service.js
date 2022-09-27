const Joi = require('joi');
const { User } = require('../../models');

const nameSchema = Joi.string().min(8).required();
const emailSchema = Joi.string().email().required();
const passSchema = Joi.string().min(6).required();
const imgSchema = Joi.string();

const objSchema = Joi.object({
  displayName: nameSchema,
  email: emailSchema,
  password: passSchema,
  image: imgSchema,
});

module.exports = async (obj) => {
  const { error } = objSchema.validate(obj);
  if (error) return { type: 400, message: error.message };

  const result = await User.findAll({ where: { email: obj.email } });
  if (result.length !== 0) return { type: 409, message: 'User already registered' };

  await User.create(obj);

  const payload = obj;
  delete payload.password;

  return { type: null, message: payload };
};