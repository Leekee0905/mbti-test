import { redirect } from "react-router-dom";
import { authApi } from "./apiInstance";

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
    if (error.status === 401) {
      localStorage.clear();
      redirect("/");
    }
    alert(error.response.data.message);
  }
};

export const updateProfile = async (formData) => {
  const token = localStorage.getItem("accessToken");
  try {
    const response = await authApi.patch("/profile", formData, {
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
