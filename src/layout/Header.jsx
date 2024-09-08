import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useAuth();

  const handleLogout = () => {
    const confirmLogout = window.confirm("정말로 로그아웃 하시겠습니까?");
    if (confirmLogout) {
      logout();
      navigate("/");
    }
  };

  return (
    <header className="header flex w-full h-20 justify-between items-center px-20">
      <h1 className="text-2xl cursor-pointer" onClick={() => navigate("/")}>
        MBTI-TEST
      </h1>
      <nav className="w-2/5">
        {isAuthenticated ? (
          <ul className="flex w-full justify-between">
            <li>안녕하세요 {user.nickname}님!</li>
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
              <button onClick={handleLogout}>로그아웃</button>
            </li>
          </ul>
        ) : (
          <Link to={"/login"}>로그인</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
