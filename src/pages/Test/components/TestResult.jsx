import { Link } from "react-router-dom";
import { MBTI_INFO } from "../../../utils/mbtiInfo";

const TestResult = ({ result, setIsSubmit }) => {
  return (
    <div className="space-y-4 p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-semibold">당신의 MBTI</h2>
      <p>
        {result}:{MBTI_INFO[result]}
      </p>
      <div className="flex justify-center items-center gap-5">
        <button
          onClick={() => setIsSubmit(false)}
          className="bg-red-400 hover:bg-gray-200 hover:text-red-500 hover:border-black hover: border-2 text-white rounded-lg w-40 h-10"
        >
          검사 다시하기
        </button>
        <Link
          to="/result"
          className="bg-red-400 hover:bg-gray-200 hover:text-red-500 hover:border-black hover: border-2 text-white rounded-lg w-auto h-10 flex items-center"
        >
          다른 사람 결과 보러가기!
        </Link>
      </div>
    </div>
  );
};

export default TestResult;
