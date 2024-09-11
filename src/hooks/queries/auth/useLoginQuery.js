import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../../api/auth";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../useAuth";

export const useLoginQuery = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { getLoginToken } = useAuth();
  const location = useLocation();
  const path = location.state?.redirectedFrom || "/";
  return useMutation({
    mutationFn: (userData) => login(userData),
    onSuccess: (response) => {
      getLoginToken(response.accessToken);
      navigate(path, { replace: true });
      queryClient.invalidateQueries(["userProfile"]);
    },
    onError: (error) => alert(error.response.data.message),
  });
};
