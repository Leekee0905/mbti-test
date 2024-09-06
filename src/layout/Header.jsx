import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header flex w-full h-20 justify-between items-center px-20">
      <h1 className="text-2xl cursor-pointer" onClick={() => navigate("/")}>
        MBTI-TEST
      </h1>
      <nav>
        <ul className="flex w-96 justify-between">
          <li className="cursor-pointer" onClick={() => navigate("/mypage")}>
            마이페이지
          </li>
          <li className="cursor-pointer" onClick={() => navigate("/test")}>
            테스트
          </li>
          <li className="cursor-pointer" onClick={() => navigate("/result")}>
            결과
          </li>
          <li>
            <button>로그아웃</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
