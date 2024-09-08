import { create } from "zustand";

const initialState = Array.from({ length: 20 }, () => "");

export const useTestStore = create((set) => ({
  test: initialState,
  selectType: (type, index) =>
    set((state) => {
      const newTest = [...state.test]; // 상태 복사
      newTest[index] = type; // 복사된 상태에서 변경
      return { test: newTest }; // 새로운 상태로 반환
    }),
}));

export default useTestStore;
