import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import TestForm from "./components/TestForm";
import useAuth from "../../hooks/useAuth";
import calculateMBTI from "../../utils/mbtiCalculator";
import useTestStore from "../../store/useTestStore";
import { getQuestions } from "../../api/questions";
import { createTestResult } from "../../api/testResult";
import TestResult from "./components/TestResult";

const Test = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [mbtiResult, setMbtiResult] = useState();
  const { user } = useAuth();
  const setQuestions = useTestStore((state) => state.setQuestions);
  const questions = useTestStore((state) => state.questions);

  const { data, isSuccess, isPending } = useQuery({
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
    const result = calculateMBTI(answers, questions);

    const resultData = {
      userId: user.id,
      nickname: user.nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    };
    if (answers.some((element) => element === null)) {
      alert("질문에 답을 모두 해주세요!");
      return;
    }
    await createTestResult(resultData);
    setMbtiResult(result);
    setIsSubmit(true);
  };
  if (isPending) return <div>isPending...</div>;

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">MBTI 테스트</h1>
      {isSubmit ? (
        <TestResult result={mbtiResult} setIsSubmit={setIsSubmit} />
      ) : (
        <TestForm onSubmit={handleTestSubmit} />
      )}
    </div>
  );
};

export default Test;
