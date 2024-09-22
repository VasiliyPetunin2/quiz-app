import styles from './welcome.module.css';
import { Counter, Button } from "@/components/ui/index.js";
import { useCounter, useQuestions, useQuiz, useLoading } from "@/hooks/index.js";

export const Welcome = ({ setPage }) => {
  const { counter } = useCounter();
  const { maxAvailableQuestions } = useQuestions();
  const { createQuiz } = useQuiz();
  const { loading, showLoader, hideLoader } = useLoading();

  const handleClickOnStartButton = () => {
    showLoader();
    setTimeout(() => {
      createQuiz();
      setPage('question');
      hideLoader();
    }, 2000)
  }

  return (
    <>
      <article className={styles.greeting}>
        <h1 className={styles.title}>Добро пожаловать</h1>
        <p className={styles.paragraph}>на викторину по странам и столицам!</p>
      </article>
      <section className={styles['questions-quantity']}>
        <p className={styles.paragraph}>Выбери количество вопросов:</p>
        <Counter maxAvailableQuestions={maxAvailableQuestions} />
      </section>
      <Button onClick={handleClickOnStartButton} text={'Начать'}
              isAble={counter >= 1 && counter <= maxAvailableQuestions && Number.isInteger(+counter)}
              loading={loading} />
    </>
  );
};