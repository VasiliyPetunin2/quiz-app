import { generateShuffledQuestions, generateAnswers, generateFilteredCountries } from "./index.js";

export const generateQuiz = (questions, questionsToGenerateCount, countries) => {
  const shuffledQuestions = generateShuffledQuestions(questions).slice(0, questionsToGenerateCount);
  let filteredCountries = generateFilteredCountries('', countries);

  return shuffledQuestions.map((question) => {
    filteredCountries = generateFilteredCountries(question.correctAnswer, filteredCountries);
    return {
      question: question.question,
      correctAnswer: question.correctAnswer,
      flag: question.flag,
      answers: generateAnswers(question.correctAnswer, filteredCountries)
    }
  })
}