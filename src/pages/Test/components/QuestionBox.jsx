import { useCallback, useEffect, useState } from "react";
import useTestSelectStore from "../../../store/testSelectStore";

const QuestionBox = ({ question }) => {
  const [selectedOption, setSelectedOption] = useState();
  const select = useTestSelectStore((state) => state.selectType);
  const state = useTestSelectStore((state) => state.mbti);

  useEffect(() => {
    console.log(state); // 상태가 변경될 때마다 콘솔에 찍힘
  }, [state]);

  const handleSelect = useCallback((index) => {
    console.log(question.type[index]);
  }, []);
  console.log(question);
  return (
    <div className="flex flex-col">
      <span>{question.question}</span>
      <div className="button-box flex flex-col justify-center">
        {question.options.map((result, index) => (
          <div key={index} className="relative">
            <input
              type="radio"
              id={`option-${index}`}
              name="question-options"
              value={result}
              onChange={() => handleSelect(index)}
              className="sr-only"
            />
            <label htmlFor={`option-${index}`} className="">
              {result}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionBox;
