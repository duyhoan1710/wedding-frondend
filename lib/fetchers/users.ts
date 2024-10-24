import { fetchWrapper } from "../fetchWrapper";
import { IUser } from "../interfaces/users";

export const getProfile = async () => {
  return fetchWrapper.get<IUser>(`users/profile`);
};
