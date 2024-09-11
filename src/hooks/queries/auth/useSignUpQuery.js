import { useMutation } from "@tanstack/react-query";
import { register } from "../../../api/auth";
import { useNavigate } from "react-router-dom";

export const useSignUpQuery = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (formData) => register(formData),
    onSuccess: () => {
      alert("회원가입 성공!");
      navigate("/login");
    },
    onError: (error) => alert(`회원가입 실패\n ${error.message}`),
  });
};
