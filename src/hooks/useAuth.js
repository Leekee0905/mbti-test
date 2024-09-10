import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("context provider 내부에서 사용해주세요.");
  }
  return context;
};

export default useAuth;
