import { useState } from "react";
import { login, register } from "../api/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthForm = ({ mode }) => {
  const navigate = useNavigate();
  const { getLoginToken } = useAuth();
  const location = useLocation();
  const path = location.state?.redirectedFrom || "/";
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });
  const [passwordError, setPasswordError] = useState("");

  const passwordValidation = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      if (!passwordValidation(value)) {
        setPasswordError(
          "비밀번호는 최소 8자, 문자, 숫자, 특수기호가 포함되어야합니다."
        );
      } else {
        setPasswordError("");
      }
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordError) {
      return;
    }
    switch (mode) {
      case "signup": {
        const response = await register(formData);
        if (response.success === true) {
          navigate("/login");
        } else {
          alert("회원가입실패");
        }
        break;
      }
      case "login": {
        const { nickname, ...rest } = formData;
        const response = await login(rest);
        if (response.success === true) {
          getLoginToken(response.accessToken);
          navigate(path, { replace: true });
          console.log("로그인!");
        }
        break;
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-96 h-96 p-5 bg-gray-200 mb-5"
      >
        <input
          className="w-full h-1/5 p-5 mb-5"
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="아이디"
          required
          minLength="2"
        />

        <input
          type="password"
          className="w-full h-1/5 p-5 mb-5"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호"
          autoComplete="false"
          required
        />
        {passwordError ? (
          <div className="error-box text-red-500 text-xs mb-5">
            {passwordError}
          </div>
        ) : null}
        {mode === "signup" && (
          <input
            className="w-full h-1/5 p-5 mb-5"
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="닉네임"
            required
          />
        )}
        <button type="submit">
          {mode === "login" ? "로그인" : "회원가입"}
        </button>
      </form>
      {mode === "signup" ? (
        <span className="text-sm">
          이미 계정이 있으신가요? <Link to={"/login"}>로그인</Link>
        </span>
      ) : null}
    </div>
  );
};

export default AuthForm;
