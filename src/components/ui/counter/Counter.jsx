import styles from './counter.module.css';
import { ButtonIcon } from "@/components/ui/index.js";
import { useCounter } from "@/hooks/index.js";

export const Counter = ({ maxAvailableQuestions }) => {
  const { counter, decrementCounter, incrementCounter, handleInputCounter, validateInputCounter } = useCounter();

  return (
    <section className={styles.counter}>
      <ButtonIcon className={styles['btn-minus']} onClick={decrementCounter} isAble={counter > 1} />
      <input type={'number'} className={styles['counter__value']} onInput={handleInputCounter}
             onBlur={validateInputCounter} value={counter} />
      <ButtonIcon className={styles['btn-plus']} onClick={incrementCounter}
                  isAble={counter < maxAvailableQuestions} />
    </section>
  );
};