import { create } from "zustand";

const initialState = { I: 0, E: 0, S: 0, N: 0, F: 0, T: 0, P: 0, J: 0 };

const useTestSelectStore = create((set) => ({
  mbti: initialState,
  selectType: (type) =>
    set((state) => {
      console.log(state.mbti);
      return {
        mbti: { ...state.mbti, [type]: state.mbti[type] + 1 },
      };
    }),
}));

export default useTestSelectStore;
