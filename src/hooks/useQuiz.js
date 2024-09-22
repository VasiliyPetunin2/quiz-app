import { useContext } from "react";
import { QuizContext } from "@/context/index.js";

export const useQuiz = () => {
  return useContext(QuizContext);
};