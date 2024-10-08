import { useEffect, useState } from "react";
import useTestStore from "../../../store/useTestStore";
const TestForm = ({ onSubmit }) => {
  const questions = useTestStore((state) => state.questions);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setAnswers(Array(questions.length).fill(null));
  }, [questions]);

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white rounded-lg shadow-lg"
    >
      {questions.map((q, index) => (
        <div key={q.id} className="mb-4">
          <p className="font-semibold">{q.question}</p>
          {q.options.map((option, i) => (
            <label key={i} className="block">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={answers[index] === option}
                onChange={() => handleChange(index, option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        제출하기
      </button>
    </form>
  );
};

export default TestForm;
