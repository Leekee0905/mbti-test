import { api } from "./apiInstance";

export const getQuestions = async () => {
  const response = await api.get("/question");
  return response.data;
};
