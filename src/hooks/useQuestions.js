import { useContext } from 'react';
import { QuestionsContext } from "@/context/index.js";

export const useQuestions = () => {
  return useContext(QuestionsContext);
};