import { fetchWrapper } from "../fetchWrapper";

export const uploadImage = (payload: { file: File }) => {
  const formData = new FormData();

  formData.append("file", payload.file);

  return fetchWrapper.post<{ fileUri: string }>(`media/upload-image`, formData);
};
