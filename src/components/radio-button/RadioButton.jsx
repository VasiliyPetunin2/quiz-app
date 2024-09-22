import styles from './radio-button.module.css';

export const RadioButton = ({
                              value,
                              handleClick,
                              name,
                              isDisabled,
                              isChecked,
                              isCheckedAndCorrect,
                              isCheckedAndIncorrect
                            }) => {
  return (
    <>
      <input type={'radio'} name={name} value={value}
             onChange={isDisabled ? () => {
             } : handleClick} disabled={isDisabled} checked={isChecked}
             className={styles['radio-hidden']} autoFocus />
      <label htmlFor={name}
             id={isCheckedAndCorrect || isCheckedAndIncorrect ? styles['answers__highlighted-answer'] : ''}
             className={`${styles['answers__answer']} ${isCheckedAndCorrect ? styles['answers__answer_correct'] : ''} ${isCheckedAndIncorrect ? styles['answers__answer_incorrect'] : ''}`}>{value}</label>
    </>
  );
};