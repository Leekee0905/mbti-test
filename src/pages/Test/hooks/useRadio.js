import { useContext } from "react";
import RadioContext from "../context/RadioContext";

const useRadio = () => {
  const context = useContext(RadioContext);
  if (!context) {
    throw Error("context provider 내부에서 context를 사용해주세요.");
  }
  return context;
};

export default useRadio;
