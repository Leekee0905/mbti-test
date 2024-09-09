import useAuth from "../../../hooks/useAuth";
import ResultItem from "./ResultItem";

const ResultList = ({ results }) => {
  const { user } = useAuth();

  return (
    <div className="space-y-4">
      {results
        .filter((result) => result.visibility || result.userId === user.id)
        .map((result) => (
          <ResultItem key={result.id} result={result} />
        ))}
    </div>
  );
};

export default ResultList;
