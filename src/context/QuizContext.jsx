import { createContext, useState } from 'react';
import { useQuestions, useCounter } from "@/hooks/index.js";
import { generateQuiz } from "@/utils/index.js";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quiz, setQuiz] = useState([]);
  const { questions, countries } = useQuestions();
  const { counter } = useCounter();

  const createQuiz = () => setQuiz(generateQuiz(questions, counter, countries));

  return (
    <QuizContext.Provider value={{ quiz, createQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};