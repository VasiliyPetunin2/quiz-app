import { createContext, useState } from 'react';

export const AnswersContext = createContext();

export const AnswersProvider = ({ children }) => {
  const [answersCount, setAnswersCount] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [incorrectAnswersCount, setIncorrectAnswersCount] = useState(0);

  const incrementAnswersCount = () => setAnswersCount((prevAnswersCount) => prevAnswersCount + 1);
  const incrementCorrectAnswersCount = () => setCorrectAnswersCount((prevCorrectAnswersCount) => prevCorrectAnswersCount + 1);
  const incrementIncorrectAnswersCount = () => setIncorrectAnswersCount((prevIncorrectAnswersCount) => prevIncorrectAnswersCount + 1);
  const resetAnswersCounts = () => {
    setAnswersCount(0);
    setCorrectAnswersCount(0);
    setIncorrectAnswersCount(0);
  }

  return (
    <AnswersContext.Provider
      value={{
        answersCount,
        correctAnswersCount,
        incorrectAnswersCount,
        incrementAnswersCount,
        incrementCorrectAnswersCount,
        incrementIncorrectAnswersCount,
        resetAnswersCounts
      }}>
      {children}
    </AnswersContext.Provider>
  );
};