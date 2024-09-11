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
  const { userProfile } = useAuth();
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
      userId: userProfile.id,
      nickname: userProfile.nickname,
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
  if (isPending)
    return (
      <div className="w-4/5 h-4/5 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8 space-y-4">
        질문 가져오는중...
      </div>
    );

  return (
    <div className="w-3/5 mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">MBTI 테스트</h1>
      {isSubmit ? (
        <TestResult result={mbtiResult} setIsSubmit={setIsSubmit} />
      ) : (
        <TestForm onSubmit={handleTestSubmit} />
      )}
    </div>
  );
};

export default Test;
