import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../../api/auth";

export const useGetLoginUserQuery = () => {
  const token = localStorage.getItem("accessToken");

  return useQuery({
    queryKey: ["userProfile", token],
    queryFn: () => getUserProfile(token),
    enabled: !!token,
  });
};
