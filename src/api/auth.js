import { authApi } from "./ApiInstance";

export const register = async (userData) => {
  try {
    const response = await authApi.post(`/register`, userData);
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const login = async (userData) => {};

export const getUserProfile = async (token) => {};

export const updateProfile = async (formData) => {};
