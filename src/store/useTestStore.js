import { create } from "zustand";

export const useTestStore = create((set) => ({
  questions: [],
  setQuestions: (data) => set({ questions: data }),
}));

export default useTestStore;
