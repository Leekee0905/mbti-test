import { authApi } from "./ApiInstance";

export const register = async (userData) => {
  try {
    const response = await authApi.post(`/register`, userData);
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const login = async (userData) => {
  try {
    const response = await authApi.post("/login", userData);
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const getUserProfile = async (token) => {
  try {
    const response = await authApi.get("/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const updateProfile = async (formData) => {};
