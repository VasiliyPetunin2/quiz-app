import styles from './answer.module.css';
import { RadioButton } from "@/components/index.js";
import { useAnswers, useKeyPress } from "@/hooks/index.js";

export const Answer = ({ selectedAnswer, setSelectedAnswer, answers, correctAnswer, quizQuestionNumber, loading }) => {
  const { answersCount } = useAnswers();

  const handleClickOnRadioButton = (e) => setSelectedAnswer(e.target.value);

  const handleIsCheckedAndCorrect = (answer) => {
    if (answersCount !== quizQuestionNumber) return false;
    return answer === correctAnswer;
  }

  const handleIsCheckedAndIncorrect = (answer) => {
    if (answersCount !== quizQuestionNumber) return false;
    return selectedAnswer === answer && answer !== correctAnswer;
  }

  const handleKeyPress = (event) => {
    if (loading || answersCount === quizQuestionNumber) return;

    const key = event.key;
    if (key >= '1' && key <= '4') {
      const index = parseInt(key, 10) - 1;
      if (index < answers.length) {
        setSelectedAnswer(answers[index]);
      }
    } else if (key === 'Backspace') {
      setSelectedAnswer(null);
    }
  };

  useKeyPress(handleKeyPress, [loading, answersCount, quizQuestionNumber, answers]);

  return (
    <form className={styles.answer}>
      <ul className={styles.answers}>
        {answers.map((answer, index) => {
          return (
            <li key={answer + quizQuestionNumber + index}>
              <RadioButton value={answer} handleClick={handleClickOnRadioButton} name={'radio'}
                           isDisabled={answersCount === quizQuestionNumber || loading}
                           isChecked={selectedAnswer === answer}
                           isCheckedAndCorrect={handleIsCheckedAndCorrect(answer)}
                           isCheckedAndIncorrect={handleIsCheckedAndIncorrect(answer)} />
            </li>
          )
        })}
      </ul>
    </form>
  );
};