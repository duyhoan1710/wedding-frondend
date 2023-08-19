import bcrypt from "bcrypt";

export const hash = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};

export const compareHash = async (
  password: string,
  hashPassword: string,
): Promise<boolean> => {
  return bcrypt.compare(password, hashPassword);
};
