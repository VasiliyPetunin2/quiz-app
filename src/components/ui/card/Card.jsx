import styles from "./card.module.css";
import { QuestionsProvider, AnswersProvider, CounterProvider, QuizProvider } from "@/context/index.js";

export const Card = ({ children, questionsData }) => {

  return (
    <QuestionsProvider questionsData={questionsData}>
      <AnswersProvider>
        <CounterProvider >
          <QuizProvider>
            <main className={styles.card}>
              {children}
            </main>
          </QuizProvider>
        </CounterProvider>
      </AnswersProvider>
    </QuestionsProvider>
  );
};