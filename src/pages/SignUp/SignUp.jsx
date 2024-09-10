import AuthForm from "../../components/AuthForm";

const SignUp = () => {
  return (
    <div className="w-1/2 h-1/2 mt-10 rounded-lg flex justify-center items-center bg-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-700 my-10">회원가입</h1>
        <AuthForm mode={"signup"} />
      </div>
    </div>
  );
};

export default SignUp;
