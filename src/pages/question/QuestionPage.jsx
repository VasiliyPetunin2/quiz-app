import styles from './question-page.module.css';
import { useState, useEffect } from 'react';
import { useCounter, useQuiz, useAnswers, useLoading } from "@/hooks/index.js";
import { Button } from '@/components/ui/index.js';
import { Question, Answer } from "@/components/index.js";

export const QuestionPage = ({ page, setPage }) => {
  const { counter } = useCounter();
  const { quiz } = useQuiz();
  const [quizQuestionNumber, setQuizQuestionNumber] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const {
    answersCount,
    incrementAnswersCount,
    incrementCorrectAnswersCount,
    incrementIncorrectAnswersCount,
    resetAnswersCounts
  } = useAnswers();
  const { loading, showLoader, hideLoader } = useLoading();

  const handleClickOnButton = () => {
    if (quizQuestionNumber === answersCount) {
      handleNextPage();
    } else {
      showLoader();
      setTimeout(() => {
        hideLoader();
        selectedAnswer === quiz[quizQuestionNumber - 1].correctAnswer ? incrementCorrectAnswersCount() : incrementIncorrectAnswersCount();
        incrementAnswersCount();
      }, 2000);
    }
  }

  const handleTextInTheButton = () => {
    if (answersCount === counter) return 'Результат';
    if (quizQuestionNumber === answersCount) return 'Дальше';
    return 'Ответить';
  }

  const handleNextPage = () => {
    if (quiz[quizQuestionNumber]) {
      setQuizQuestionNumber((prevQuizQuestionNumber) => prevQuizQuestionNumber + 1);
      setSelectedAnswer('');
    } else {
      showLoader();
      setTimeout(() => {
        hideLoader();
        setPage('result');
      }, 2000);
    }
  }

  useEffect(() => {
    resetAnswersCounts();
  }, [page]);

  return (
    <>
      <Question question={quiz[quizQuestionNumber - 1].question}
                flag={quiz[quizQuestionNumber - 1].flag} />
      <Answer selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer}
              answers={quiz[quizQuestionNumber - 1].answers}
              correctAnswer={quiz[quizQuestionNumber - 1].correctAnswer}
              quizQuestionNumber={quizQuestionNumber}
              loading={loading} />
      <div className={styles['question-page-footer']}>
        <Button onClick={handleClickOnButton} text={handleTextInTheButton()}
                isAble={selectedAnswer && true} loading={loading} />
        <p className={styles['question-page-footer__number-of-question']}>{quizQuestionNumber} / {counter}</p>
      </div>
    </>
  );
};