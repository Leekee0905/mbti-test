import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/apiInstance";
import { useEffect, useState } from "react";
import TestForm from "./components/TestForm";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuth();
  const getQuestions = async () => {
    const response = await api.get("/question");
    return response.data;
  };
  const { data, isPending, isSuccess, isError } = useQuery({
    queryKey: ["question"],
    queryFn: getQuestions,
    staleTime: Infinity,
  });
  useEffect(() => {
    if (isSuccess) {
      setQuestions(data);
    }
  }, [data, isSuccess]);
  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);
    const resultData = {
      userId: user.id,
      nickname: user.nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    };
    await createTestResult(resultData);
    navigate("/results");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">MBTI 테스트</h1>
      <TestForm onSubmit={handleTestSubmit} />
    </div>
  );
};

export default Test;
