import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/apiInstance";
import { useEffect, useState } from "react";
import QuestionBox from "./components/QuestionBox";

const Test = () => {
  const [questions, setQuestions] = useState([]);
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

  return (
    <div className="test-container bg-white w-9/12 flex flex-col items-center p-20">
      <h1 className="text-3xl font-bold">MBTI 테스트</h1>
      {questions.map((question) => (
        <QuestionBox key={question.id} question={question} />
      ))}
    </div>
  );
};

export default Test;
