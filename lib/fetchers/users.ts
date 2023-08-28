import { fetchWrapper } from "../fetchWrapper";

const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000";

export const getUsers = async ({
  page,
  perPage,
}: {
  page: number;
  perPage: number;
}) => {
  return fetchWrapper.get(
    `${SERVER_ENDPOINT}/api/users?page=${page}&perPage=${perPage}`,
  );
};

export const getUser = async ({ userId }: { userId: string }) => {
  return fetchWrapper.post(`${SERVER_ENDPOINT}/api/users/${userId}`);
};
