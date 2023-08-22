import { fetchWrapper } from "../fetchWrapper";

const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return fetchWrapper.post(`${SERVER_ENDPOINT}/api/auth/login`, {
    email,
    password,
  });
};

export const register = async ({
  email,
  fullName,
  password,
}: {
  email: string;
  fullName: string;
  password: string;
}) => {
  return fetchWrapper.post(`${SERVER_ENDPOINT}/api/auth/register`, {
    email,
    fullName,
    password,
  });
};
