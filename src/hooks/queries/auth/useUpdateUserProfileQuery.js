import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../../../api/auth";

export const useUpdateUserProfileQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (formData) => updateProfile(formData),
    onSuccess: (response) => {
      alert(response.message);
      queryClient.invalidateQueries(["userProfile"]);
    },
    onError: (error) => alert(error.response.data.message),
  });
};
