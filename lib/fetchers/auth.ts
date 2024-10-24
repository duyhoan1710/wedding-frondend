import { fetchWrapper } from "../fetchWrapper";
import { IAuth } from "../interfaces/auth";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return fetchWrapper.post<IAuth>(
    `login`,
    {
      email,
      password,
    },
    { public: true },
  );
};

export const register = async ({
  email,
  name,
  password,
}: {
  email: string;
  name: string;
  password: string;
}) => {
  return fetchWrapper.post(
    `signup`,
    {
      email,
      name,
      password,
    },
    { public: true },
  );
};
