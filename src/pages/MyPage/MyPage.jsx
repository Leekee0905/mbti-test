import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "../../api/auth";

const MyPage = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({ nickname: "" });
  useEffect(() => {
    if (user) {
      setFormData({ nickname: user.nickname });
    }
  }, [user]);
  const handleChangeNickname = async () => {
    if (formData.nickname === user.nickname) {
      alert("닉네임을 변경해주세요!");
      return;
    }
    const response = await updateProfile(formData);
    if (response.success) {
      alert(response.message);
    }
  };

  console.log(formData);
  return (
    <div className="w-1/2 h-1/2 mt-10 rounded-lg flex flex-col justify-center items-center bg-white">
      <h1>프로필 수정</h1>
      <form
        className="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          handleChangeNickname();
        }}
      >
        <input
          type="text"
          required
          value={formData.nickname}
          minLength="2"
          onChange={(e) => setFormData({ nickname: e.target.value })}
        />
        <button type="submit">프로필 업데이트</button>
      </form>
    </div>
  );
};

export default MyPage;
