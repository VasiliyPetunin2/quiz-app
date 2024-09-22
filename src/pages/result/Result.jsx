import styles from './result.module.css';
import { useState, useRef } from "react";
import { Button } from "@/components/ui/index.js";
import { useCounter, useAnswers } from "@/hooks/index.js";
import { formatPhrase } from "@/utils/index.js";
import resultPic from '@/assets/result.svg';
import resultPicMobile from '@/assets/result-mobile.svg';

export const Result = ({ setPage }) => {
  const { counter } = useCounter();
  const { correctAnswersCount, incorrectAnswersCount, resetAnswersCounts } = useAnswers();
  const btnRef = useRef(null);
  const [formattedQuestionWord] = useState(formatPhrase(`${correctAnswersCount} вопрос`).split(' ').pop());
  const [formattedMistakeWord] = useState(formatPhrase(`${incorrectAnswersCount} ошибка`).split(' ').pop());

  const handleResultsBtn = () => {
    setPage('welcome');
    resetAnswersCounts();
  }

  return (
    <>
      <picture style={{display: 'inherit'}}>
        <source srcSet={resultPicMobile} media={'(max-width: 767px)'} />
        <img src={resultPic} alt='Изображение путешественника с белым флагом на горе' />
      </picture>
      <article className={styles.result}>
        <h1 className={styles['result__title']}>Результат</h1>
        {
          (correctAnswersCount !== 0 && correctAnswersCount !== counter) &&
          <p className={styles['result__paragraph']}>Ты ответил правильно на&nbsp;<span
            className={styles['result__paragraph_true']}>{correctAnswersCount}</span>&nbsp;{formattedQuestionWord} и
            сделал <span
              className={styles['result__paragraph_false']}>{incorrectAnswersCount}</span> {formattedMistakeWord}.
          </p>
        }
        {
          correctAnswersCount === counter &&
          <p className={styles['result__paragraph']}>Ты ответил правильно<br />на все вопросы. Так держать!</p>
        }
        {
          incorrectAnswersCount === counter &&
          <p className={styles['result__paragraph']}>Ты не ответил ни на один вопрос. Попробуй еще!</p>
        }
      </article>
      <Button text={'Попробовать еще'} onClick={handleResultsBtn} ariaLabel={'Попробовать ещё'} ref={btnRef} />
    </>
  );
};