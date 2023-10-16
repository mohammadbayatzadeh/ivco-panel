const { hashSync, compareSync } = require("bcryptjs");

export const hashPassword = (password) => {
  const hashed = hashSync(password);
  return hashed;
};

export const comparepasswords = (pass, hashed) => {
  const result = compareSync(pass, hashed);
  return result;
};
