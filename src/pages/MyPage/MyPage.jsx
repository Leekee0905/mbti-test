import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useUpdateUserProfileQuery } from "../../hooks/queries/auth/useUpdateUserProfileQuery";

const MyPage = () => {
  const { userProfile } = useAuth();
  const [formData, setFormData] = useState({ nickname: "" });
  const { mutate: updateUserNicknameMutate } = useUpdateUserProfileQuery();

  useEffect(() => {
    if (userProfile) {
      setFormData({ nickname: userProfile.nickname });
    }
  }, [userProfile]);
  const handleChangeNickname = async () => {
    if (formData.nickname === userProfile.nickname) {
      alert("닉네임을 변경해주세요!");
      return;
    }
    updateUserNicknameMutate(formData);
  };

  return (
    <div className="w-1/2 h-96 mt-10 rounded-lg flex flex-col justify-center items-center bg-white">
      <h1 className="text-3xl font-bold text-gray-700 mt-10">프로필 수정</h1>
      <form
        className="flex flex-col w-1/2 h-1/2 justify-center "
        onSubmit={(e) => {
          e.preventDefault();
          handleChangeNickname();
        }}
      >
        <span className="my-3">닉네임</span>
        <input
          className="w-full h-1/5 p-5 mb-5 rounded-lg border-2"
          type="text"
          required
          value={formData.nickname}
          minLength="2"
          onChange={(e) => setFormData({ nickname: e.target.value })}
        />

        <button
          type="submit"
          className="bg-red-400 hover:bg-gray-200 hover:text-red-500 hover:border-black hover: border-2 text-white rounded-lg h-10"
        >
          프로필 업데이트
        </button>
      </form>
    </div>
  );
};

export default MyPage;
