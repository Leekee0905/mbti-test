import { useState } from "react";

const AuthForm = ({ mode }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });
  const [formError, setFormError] = useState({
    idError: "",
    passwordError: "",
    nicknameError: "",
  });

  const passwordValidtaion = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formError);
    if (formError.emailError || formError.passwordError) {
      alert("입력한 정보를 다시 확인해주세요!");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="아이디"
        required
      />
      {formError.id ? (
        <div className="error-box text-color-red text-xs">{formError.id}</div>
      ) : null}

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호"
        required
      />
      {formError.password ? (
        <div className="error-box text-color-red text-xs">
          {formError.passwordError}
        </div>
      ) : null}
      {mode === "signup" && (
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="닉네임"
          required
        />
      )}
      <button type="submit">{mode === "login" ? "로그인" : "회원가입"}</button>
    </form>
  );
};

export default AuthForm;
