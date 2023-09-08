import { fetchWrapper } from "../fetchWrapper";

const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000";

export const submitAttendForm = async ({
  name,
  phone,
  status,
}: {
  name: string;
  phone?: string;
  status: string;
}) => {
  return fetchWrapper.post(`${SERVER_ENDPOINT}/api/formExcel`, {
    name,
    phone,
    status,
  });
};
