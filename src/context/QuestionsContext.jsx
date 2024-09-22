import { createContext, useState } from 'react';

export const QuestionsContext = createContext();

export const QuestionsProvider = ({ children, questionsData }) => {
  const [questions] = useState(questionsData.questions);
  const [countries] = useState(questionsData.countries);
  const maxAvailableQuestions = questions.length;

  return (
    <QuestionsContext.Provider value={{ questions, countries, maxAvailableQuestions }}>
      {children}
    </QuestionsContext.Provider>
  );
};