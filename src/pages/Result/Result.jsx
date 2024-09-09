import { useResultQuery } from "../../hooks/queries/useResultQuery";
import ResultList from "./components/ResultList";

const Result = () => {
  const { data, isPending, isError } = useResultQuery();
  if (isPending) return <div>isPending...</div>;
  if (isError) return <div>Error!</div>;
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
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
