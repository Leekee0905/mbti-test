import { useQuery } from "@tanstack/react-query";
import { getTestResults } from "../../../api/testResult";

export const useResultQuery = () => {
  return useQuery({
    queryKey: ["testResult"],
    queryFn: getTestResults,
  });
};
