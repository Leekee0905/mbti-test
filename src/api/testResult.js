import { api } from "./apiInstance";

export const getTestResults = async () => {
  const response = await api.get("/testResult");
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await api.post("/testResult", resultData);
  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await api.delete(`/testResult/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  const response = await api.patch(`/testResult/${id}`, { visibility });
  return response.data;
};
