import { useResultQuery } from "../../hooks/queries/result/useResultQuery";
import ResultList from "./components/ResultList";

const Result = () => {
  const { data, isPending, isError } = useResultQuery();
  if (isPending)
    return (
      <div className="w-4/5 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8 space-y-4 mt-5">
        결과 가져오는중...
      </div>
    );
  if (isError)
    return (
      <div className="w-4/5 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8 space-y-4 mt-5">
        결과를 가져오는중 에러가 발생했습니다!
      </div>
    );
  return (
    <div className="w-4/5 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8 mt-5">
      <div className="bg-white max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
          모든 테스트 결과
        </h1>
        <ResultList results={data} />
      </div>
    </div>
  );
};

export default Result;
