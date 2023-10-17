const { hashSync, compareSync } = require("bcryptjs");

export const hashPassword = (password) => {
  const hashed = hashSync(password);
  return hashed;
};

export const comparepasswords = async (pass, hashed) => {
  const result = await compareSync(pass, hashed);
  return result;
};
