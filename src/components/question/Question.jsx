import styles from './question.module.css';

export const Question = ({ question, flag }) => {
  return (
    <figure className={styles['question-text']}>
      <img src={flag}
           alt='Изображение флага, страну которого необходимо назвать'
           className={styles['question-flag']} />
      <figcaption className={styles.paragraph}>{question}</figcaption>
    </figure>
  );
};