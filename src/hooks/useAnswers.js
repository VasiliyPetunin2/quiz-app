import { useContext } from 'react';
import { AnswersContext } from "@/context/index.js";

export const useAnswers = () => {
  return useContext(AnswersContext);
};
