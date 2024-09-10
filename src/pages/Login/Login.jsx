import { Link } from "react-router-dom";
import AuthForm from "../../components/AuthForm";

const Login = () => {
  return (
    <div className="w-1/2 h-1/2 mt-10 rounded-lg flex justify-center items-center bg-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-700 my-10">로그인</h1>
        <AuthForm mode="login" />
        <div>
          <p className="mb-5">
            계정이 없으신가요?{" "}
            <Link to="/signup" className="text-red-500 font-bold">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
