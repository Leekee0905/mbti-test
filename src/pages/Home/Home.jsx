import { useNavigate } from "react-router-dom";
import HomeBox from "./components/HomeBox";

const HOME_BOX_INFO_DATA = [
  {
    title: "성격 유형 검사",
    content:
      "자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요.",
  },
  {
    title: "성격 유형 이해",
    content:
      "다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다.",
  },
  {
    title: "팀 평가",
    content:
      "팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요.",
  },
];
const Home = () => {
  const navigate = useNavigate();
  const handleGoToText = () => {
    navigate("/test");
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="home-header text-center w-full h-60 flex flex-col justify-center px-20 py-12">
        <h1 className="text-5xl mb-20 font-bold text-gray-700">
          무료 MBTI TEST
        </h1>
        <span className="text-2xl">
          자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해주세요.
        </span>
      </div>
      <div className="home-box-container w-full flex justify-between px-40">
        {HOME_BOX_INFO_DATA.map((data, index) => {
          return <HomeBox data={data} key={index} />;
        })}
      </div>
      <div className="home-button-container flex justify-center items-center w-full h-40">
        <button
          className="w-96 h-16 border-2 rounded-3xl bg-red-400 hover:bg-gray-200 hover:text-red-500 hover:border-black text-white"
          onClick={handleGoToText}
        >
          내 성격 알아보러 가기
        </button>
      </div>
    </div>
  );
};

export default Home;
