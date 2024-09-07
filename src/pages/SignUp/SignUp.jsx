import AuthForm from "../../components/AuthForm";

const SignUp = () => {
  return (
    <div className="w-1/2 h-1/2 mt-10 rounded-lg flex justify-center items-center bg-white">
      <AuthForm mode={"signup"} />
    </div>
  );
};

export default SignUp;
